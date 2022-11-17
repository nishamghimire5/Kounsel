import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { PrismaClient } from "@prisma/client"
import Link from 'next/link'
import React, { useState } from 'react';
import prisma from '../prisma'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  const { user } = session;

  const thisBooking = await prisma.booking.findUnique({
    where: {
      email: user.email,
    }
  });

  const status = await prisma.busy.findUnique({
    where: {
      id: 1,
    }
  });

  return {
    props: {
      uniqueBooking: thisBooking,
      busyStatus: status
    }
  };
}

export default function Home({ uniqueBooking, busyStatus }) {

  const [busyButtonText, setBusyButtonText] = useState(busyStatus.busy ? 'Toggle to available' : 'Toggle to busy');

  const toggleBusy = async (event) => {
    if (event.target.value == "Toggle to busy" && !busyStatus.busy) {
      const data = await fetch(`/api/busy?id=1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ busy: true }),
      });
      setBusyButtonText('Toggle to available');
    } else if (event.target.value == "Toggle to available" && busyStatus.busy) {
      const data = await fetch(`/api/busy?id=1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ busy: false }),
      });
      setBusyButtonText('Toggle to busy');
    }
  }


  if ((new Date() < new Date(uniqueBooking.date)) || busyStatus.busy) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1 fw-bold">Chat Unavailable</h1>
            <p className="fs-3">Either the counselor is currently busy or your appointment date hasn&apos;t arrived yet.</p>
            <p className="lead">
              Please wait until the counselor is free or until your appointment date.
            </p>
            <Link href="/dashboard">
              <a href="" className="btn btn-light mx-2">Dashboard</a>
            </Link>
            <Link href="/mybookings">
              <a href="" className="btn btn-light">My Bookings</a>
            </Link>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <input onClick={toggleBusy} type="button" style={{ 'width': '150px', 'margin': '5px' }} value={busyButtonText} className="btn btn-light" />
        <div className="container">

          <Head>
          </Head>

          <main>
            <h1 className="title">Chat</h1>
            <AblyChatComponent />
          </main>



          <style jsx>{`
          .container {
            display: grid;
            grid-template-rows: 1fr 100px;
            min-height: 100vh;
            background-color: #eee;
          }
  
          main {
            display: grid;
            grid-template-rows: auto 1fr;
            width: calc(100% - 40px);
            max-width: 900px;
            margin: 20px auto;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.2);
            background-color: white;
          }
  
          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            margin: 0;
            color: white;
            background: #005C97;
            background: -webkit-linear-gradient(to right, #363795, #005C97);
            background: linear-gradient(to right, #363795, #005C97);
          }
  
          footer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 100vw;
            height: 100px;
          }
  
          .logo {
            display: block;
            height: 20px;
            margin: 0.5em;
          }
  
          .svg { 
            fill:#005C97; 
            color:#fff; 
            position: absolute; 
            top: 0; 
            border: 0; 
            right: 0; 
          }
  
          .octo-arm {
            transform-origin: 130px 106px;
          }
  
          .github-corner:hover .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }
          
          @keyframes octocat-wave {
            0%, 100%{transform:rotate(0)}
            20%,60%{transform:rotate(-25deg)}
            40%,80%{transform:rotate(10deg)}}
          }
  
          @media (min-width: 600px) {
            .logo {
              height: 40px;
              margin: 1em;
            }
    
            .ably {
              height: 60px;
            }
          }
         
        `}</style>

          <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
  
          [data-author="me"] {
            background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            color: white;
            align-self: flex-end;
            border-bottom-right-radius: 0!important;
            border-bottom-left-radius: 10px!important;
          }
          
        `}</style>
        </div>
      </>
    )
  }
}