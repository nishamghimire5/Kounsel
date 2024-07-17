import { PrismaClient } from "@prisma/client"
import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import Router from "next/router";
import { useEffect } from "react";
import prisma from "../prisma";
import Link from "next/link";
import email from "../counselormail";
import {useSession, signIn, signOut, getSession} from 'next-auth/react'
import failedauth from "./unauthorized";

export async function getServerSideProps(context) {
    const bookings = await prisma.booking.findMany();
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    const {user} = session;
    const status = await prisma.busy.findUnique({
        where: {
            id: 1,
        }
    });

    return {
        props: {
            initialBookings: bookings,
            busyStatus: status,
            user: user
        }
    };
}

export default function Bookings({ initialBookings, busyStatus, user }) {

    let count = 0;

    const [datePickerReadOnly, setReadOnly] = useState(true);
    const [buttonText, setButtonText] = useState('Make Changes');
    const [busyButtonText, setBusyButtonText] = useState(busyStatus.busy ? 'Toggle to available' : 'Toggle to busy');
    const [bookingEntries, setBookingEntries] = useState(initialBookings);
    let today = new Date().toISOString().split('T')[0];

    const makeChanges = async (event) => {
        if (event.target.value == "Make Changes") {
            setReadOnly(false);
            setButtonText('Save');
        } else {
            setReadOnly(true);
            setButtonText('Make Changes');
        }
    }

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

    const deleteRecord = async (email) => {
        console.log("The email: " + email)
        const data = await fetch(`/api/book?email=${email}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        });
        Router.reload();
    }

    const approveRequest = async (email) => {
        const data = await fetch(`/api/book?email=${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ approved: 'Yes' }),
        });
        Router.reload();
    }

    const chatDisabled = (date, time, approved) => {
        const currentDate = new Date();
        const currentDateLocal = currentDate.toLocaleString(undefined);
        const userT = new Date(date + ' ' + time);
        const userTime = userT.toLocaleString(undefined);
        if (new Date(currentDateLocal) >= new Date(userTime) && approved != "No") return false;
        return true;
    }

    const isApproved = (approved) => {
        if (approved === 'Yes') return true;
        return false;
    }

    const updateDate = async (e, email) => {
        let entry = [...bookingEntries];
        entry = entry.map((x) => {
            if (x.email === email) x.date = e.target.value;
            return x;
        });
        setBookingEntries(entry);
        const data = await fetch(`/api/book?email=${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ date: e.target.value }),
        });

    }

    const updateTime = async (e, email) => {
        let entry = [...bookingEntries];
        entry = entry.map((x) => {
            if (x.email === email) x.time = e.target.value;
            return x;
        });
        setBookingEntries(entry);
        const data = await fetch(`/api/book?email=${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ time: e.target.value }),
        });

    }

    if (user.email != email) {
        return (
            <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <p className="fs-3">You are not authorized to access this page.</p>
                    <Link href="/dashboard">
                        <a href="" className="btn btn-light">Dashboard</a>
                    </Link>
                </div>
            </div>
            </>
        )
    } else {
        return (
            <>
                <div><input onClick={makeChanges} type="button" style={{ 'width': '150px', 'margin': '5px' }} value={buttonText} className="btn btn-light" /></div>
                <table className="table" id="example">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Booked Date</th>
                            <th scope="col">Message</th>
                            <th scope="col">Approved</th>
                            <th scope="col" className="text-center">Actions</th>
                            <th><input onClick={toggleBusy} type="button" style={{ 'width': '150px', 'margin': '5px' }} value={busyButtonText} className="btn btn-light" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingEntries.slice(0).reverse().map((booking) => (
                            <tr key={booking}>
                                <th scope="row">{++count}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                {/*<td><DatePicker selected={new Date(booking.date)} onChange={(date = new Date()) => { updateDate(booking.email, date) }} dateFormat="MM/dd/yyyy h:mm aa" timeInputLabel="Time:" showTimeInput disabled={datePickerReadOnly} /></td>*/}
                                <td>
                                    <input type="date" id="date" name="date" onKeyDown={(e) => e.preventDefault()} min={today} onChange={(e) => updateDate(e, booking.email)} value={booking.date} disabled={datePickerReadOnly}/>
                                    <input type="time" id="time" name="time" onChange={(e) => updateTime(e, booking.email)} value={booking.time} disabled={datePickerReadOnly}/>
                                </td>
                                <td>{booking.message}</td>
                                <td>{booking.approved}</td>
                                <td>
                                    <button className="btn btn-light" onClick={() => { approveRequest(booking.email) }} disabled={isApproved(booking.approved)}>Approve</button>
                                    <button className="btn btn-light" onClick={() => { deleteRecord(booking.email) }}>Delete</button>
                                    <Link href="/chat">
                                        <button className="btn btn-light" disabled={chatDisabled(booking.date, booking.time, booking.approved)}>Chat</button>
                                    </Link>
    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}