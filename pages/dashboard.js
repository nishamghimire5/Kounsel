import Link from 'next/link';
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { useEffect } from 'react';
import fixName from '../fixname';
import prisma from '../prisma';
import React, { useState } from 'react';
import email from '../counselormail';

export default function Dashboard({ user, busyStatus }) {
    const finalName = fixName(user.name);
    console.log(finalName);
    console.log(user.email === email);

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

        if (user.email !== email) {
            createUser(user);   
        }
    }, []);


    if (user.email === email) {
        console.log("here");
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
        console.log("here too");
        return (<>

            <p className="fw-bold fs-1 text-center">Welcome, {finalName}!</p>
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlbGxuZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded mx-auto d-block" alt="..."></img>

            <p className="fs-5 lead" style={{ margin: "20px" }}>
                The website will provide counselling services to individuals of Kathmandu University who are experiencing difficulties in their lives. The website will offer a range of services including booking an appintment, online counselling, and many more.
                The website will also provide information on a range of topics such as mental health, relationships, and grief. <Link href="/about"><a href="" className="button1">Read More</a></Link>
            </p>
            <div className="d-grid gap-2">
                <Link href="/book"><button className="d-grid gap-2 col-6 mx-auto" type="button">Book an appointment</button></Link>
                <br></br>
                <Link href="/chat"><button className="d-grid gap-2 col-6 mx-auto" type="button">Chat with the counsellor</button></Link>
            </div>


        </>)
    }

    return(<div>no</div>)
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
    return {
        props: {
            user: user,
            busyStatus: status
        }
    }
}