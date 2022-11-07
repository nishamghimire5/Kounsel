import { PrismaClient } from "@prisma/client"
import DatePicker from "react-datepicker";
import React, { useState } from 'react';

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const bookings = await prisma.booking.findMany();
    return {
        props: {
            initialBookings: bookings
        }
    };
}



export default function Bookings({ initialBookings }) {
    console.log(initialBookings);
    let count = 0;

    const [datePickerReadOnly, setReadOnly] = useState(true);
    const [buttonText, setButtonText] = useState('Make Changes');

    const makeChanges = async (event) => {
        if(event.target.value == "Make Changes") {
            setReadOnly(false);
            setButtonText('Save');
        } else {
            setReadOnly(true);
            setButtonText('Make Changes');
        }
    }

    const deleteRecord = (email) => {
        console.log("The email: " + email)
    }

    const approveRequest = async (email) => {
        const data = await fetch(`/api/book?email=${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({approved: 'Yes'}),
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
            body: JSON.stringify({date: date}),
        });
    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Booked Date</th>
                    <th scope="col">Message</th>
                    <th scope="col" className="text-center">Actions</th>
                    <th scope="col"><input onClick={makeChanges} type="button" style={{'width': '150px'}} value={buttonText} className="btn btn-light"/></th>
                </tr>
            </thead>
            <tbody>
                {initialBookings.slice(0).reverse().map((booking) => (
                    <tr key={booking}>
                        <th scope="row">{++count}</th>
                        <td>{booking.email}</td>
                        <td><DatePicker selected={new Date(booking.date)} dateFormat="MM/dd/yyyy h:mm aa" timeInputLabel="Time:" showTimeInput disabled={datePickerReadOnly} /></td>
                        <td>{booking.message}</td>
                        <td>
                            <button className="btn btn-light" onClick={() => {approveRequest(booking.email)}} disabled={isApproved(booking.approved)}>Approve</button>
                            <button className="btn btn-light" onClick={() => {console.log("from the button: " + booking.email)}}>Delete</button>
                            <button className="btn btn-light" disabled={chatDisabled(booking.date)}>Chat</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}