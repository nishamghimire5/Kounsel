import Link from 'next/link';
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { useEffect } from 'react';
import fixName from '../fixname';
import prisma from '../prisma';
import React, { useState } from 'react';
import email from '../counselormail';
import Image from 'next/image';

export default function Dashboard({ user, busyStatus, thisUser }) {
    const finalName = fixName(user.name);

    const [busyButtonText, setBusyButtonText] = useState(busyStatus.busy ? 'Toggle to available' : 'Toggle to busy');

    const toggleBusy = async (event) => {
        const bStatus = await fetch(`/api/busy?id=${1}`);

        const theStatus = await bStatus.json();


        if (!theStatus.status.busy) {
            console.log("gets to first, yes");
            const data = await fetch(`/api/busy?id=${1}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ busy: true }),
            });
            setBusyButtonText('Toggle to available');
        } else if (theStatus.status.busy) {
            console.log("gets to second, yes");
            const data = await fetch(`/api/busy?id=${1}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ busy: false }),
            });
            setBusyButtonText('Toggle to busy');
        }
    }


    useEffect(() => {
        const createUser = async (user) => {
            const userData = {
                email: user.email,
                name: finalName,
                bookings: 0,
                sessions: 0,
            }
            const data = await fetch(`/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
        }

        createUser(user);
    }, []);


    if (user.email === email) {
        return (
            <>
                <h1 className="status display-5 text-success text-center mt-5">Welcome, {user.name}</h1>
                <h3 className="status display-5 text-success text-center mt-5">Are you available?</h3>
                <section className="wrapper">
                    <div className="container">
                        <div className="text-center">
                            <button onClick={toggleBusy} style={{ width: "300px" }} className="col-sm-6 col-md-6 col-lg-6 btn btn-success">{busyButtonText}</button>
                        </div>


                        <div className="row">
                            <div className="col text-center mb-5 ">
                                <h3 className="status display-5 text-success text-center mt-5">Manage your appointments</h3>
                                <Link href="/bookings"><button style={{ width: "300px" }} className="col-sm-6 col-md-6 col-lg-6 btn btn-success mx-3 mt-3">See bookings</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>)
    } else {
        return (
            <>
                <div style={{ overflow: 'hidden' }}>
                    <div className='dashboard-column'>
                        <h1 className='dashboard-welcome'>Welcome, {finalName}!</h1>
                        <div className="dashboard-img">
                            {thisUser != null && thisUser.avatar && thisUser.version != '' && <Image src={`https://res.cloudinary.com/dgglbr1hh/image/upload/f_auto,q_auto,w_150,h_150,g_face,c_thumb,r_max/v${thisUser.version}/${thisUser.avatar}`} width="350px" height="350px" layout="fixed" className="dashboard-img-shape" alt="profile picture" />}
                            {(thisUser == null || thisUser.verion == '') && <Image src={`https://res.cloudinary.com/dgglbr1hh/image/upload/f_auto,q_auto,w_150,h_150,g_face,c_thumb,r_max/default_avatar`} width="350px" height="350px" layout="fixed" className="dashboard-img-shape" alt="profile picture" />}
                        </div>
                    </div>

                    <div>
                        <div className="dashboard-text">
                            <p>The website will provide counselling services to individuals of Kathmandu University
                                who are experiencing difficulties in their lives. The website will offer a range of
                                services including booking an appointment, online counselling, and many more. The website
                                will also provide information on a range of topics such as mental health, relationships, and
                                grief. <Link href="/about"><a> Read More</a></Link>
                            </p>
                        </div>

                        <div className="mb-5 pb-5">
                            <Link href="/chat"><a><button className="counselor-chat-button">Chat with the counselor</button></a></Link>
                            <Link href="/book"><a><button className="appointment-book-button">Book an appointment</button></a></Link>
                        </div>
                    </div>
                    <br /> <br /> <br />
                </div>
            </>
        )
    }
}

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
    const status = await prisma.busy.findUnique({
        where: {
            id: 1,
        }
    });
    const thisUser = await prisma.user.findUnique({
        where: {
            email: user.email,
        }
    })
    return {
        props: {
            user: user,
            busyStatus: status,
            thisUser: thisUser
        }
    }
}