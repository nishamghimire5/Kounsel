import { PrismaClient } from "@prisma/client"
import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import Link from 'next/link'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import Router from "next/router";


const prisma = new PrismaClient();

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

    return {
        props: {
            uniqueBooking: thisBooking
        }
    };
}



export default function Bookings({ uniqueBooking }) {
    console.log(uniqueBooking);
    let count = 0;

    const [datePickerReadOnly, setReadOnly] = useState(true);
    const [buttonText, setButtonText] = useState('Make Changes');

    const makeChanges = async (event) => {
        if (event.target.value == "Make Changes") {
            setReadOnly(false);
            setButtonText('Save');
        } else {
            setReadOnly(true);
            setButtonText('Make Changes');
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

    if (uniqueBooking != null) {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Booked Date</th>
                        <th scope="col">Message</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{++count}</th>
                        <td>{uniqueBooking.email}</td>
                        <td><DatePicker selected={new Date(uniqueBooking.date)} dateFormat="MM/dd/yyyy h:mm aa" timeInputLabel="Time:" showTimeInput disabled={datePickerReadOnly} /></td>
                        <td>{uniqueBooking.message}</td>
                        <td>
                            <button className="btn btn-light" onClick={() => { deleteRecord(uniqueBooking.email) }}>Delete</button>
                            <button className="btn btn-light" disabled={chatDisabled(uniqueBooking.date)}>Chat</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        )
    } else {
        return (
            <>
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="text-center">
                        <p className="fs-3">You have no bookings yet.</p>
                        <Link href="/book">
                            <a href="" className="btn btn-light">Book</a>
                        </Link>
                    </div>
                </div>
            </>
        )
    }


}