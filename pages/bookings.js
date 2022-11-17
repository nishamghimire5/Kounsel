import { PrismaClient } from "@prisma/client"
import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import Router from "next/router";
import { useEffect } from "react";
import prisma from "../prisma";

export async function getServerSideProps() {
    const bookings = await prisma.booking.findMany();
    const status = await prisma.busy.findUnique({
        where: {
            id: 1,
        }
    });
    return {
        props: {
            initialBookings: bookings,
            busyStatus: status
        }
    };
}

export default function Bookings({ initialBookings, busyStatus }) {



    console.log(initialBookings);
    console.log(busyStatus);
    let count = 0;

    const [datePickerReadOnly, setReadOnly] = useState(true);
    const [buttonText, setButtonText] = useState('Make Changes');
    const [busyButtonText, setBusyButtonText] = useState(busyStatus.busy ? 'Toggle to available' : 'Toggle to busy');

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);

    const makeChanges = async (event) => {
        if (event.target.value == "Make Changes") {
            setReadOnly(false);
            setButtonText('Save');
            toggleMenu();
        } else {
            setReadOnly(true);
            Router.reload();
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

    const chatDisabled = (date) => {
        if (new Date() >= new Date(date)) return false;
        return true;
    }

    const isApproved = (approved) => {
        if (approved === 'Yes') return true;
        return false;
    }

    const updateDate = async (email, date) => {
        const data = await fetch(`/api/book?email=${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ date: date }),
        });
    }

    return (
        <>
            {isOpen && (<div style={{ margin: '5px' }}>Please click save to see your changes.</div>)}
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
                    {initialBookings.slice(0).reverse().map((booking) => (
                        <tr key={booking}>
                            <th scope="row">{++count}</th>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td><DatePicker selected={new Date(booking.date)} onChange={(date = new Date()) => { updateDate(booking.email, date) }} dateFormat="MM/dd/yyyy h:mm aa" timeInputLabel="Time:" showTimeInput disabled={datePickerReadOnly} /></td>
                            <td>{booking.message}</td>
                            <td>{booking.approved}</td>
                            <td>
                                <button className="btn btn-light" onClick={() => { approveRequest(booking.email) }} disabled={isApproved(booking.approved)}>Approve</button>
                                <button className="btn btn-light" onClick={() => { deleteRecord(booking.email) }}>Delete</button>
                                <button className="btn btn-light" disabled={chatDisabled(booking.date)}>Chat</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}