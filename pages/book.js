import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {useSession, getSession, signIn, signOut} from 'next-auth/react';
import { PrismaClient } from "@prisma/client"
import Link from 'next/link';
import prisma from '../prisma';
import email from '../counselormail';
import Router from 'next/router';

export default function Book({uniqueBooking, user, uniqueUser}) {
	const [startDate, setStartDate] = useState(new Date());
	// Handles the submit event on form submit.
	const handleSubmit = async (event) => {
	  // Stop the form from submitting and refreshing the page.
	  event.preventDefault()
  
	  // Get data from the form.
	  const data = {
		date: event.target.date.value,
		time: event.target.time.value,
		email: user.email,
		name: uniqueUser.name,
		message: event.target.message.value,
		approved: 'No',
	  }
  
	  // Send the data to the server in JSON format.
	  const JSONdata = JSON.stringify(data)
  
	  // API endpoint where we send form data.
	  const endpoint = '/api/book'
  
	  // Form the request for sending data to the server.
	  const options = {
		// The method is POST because we are sending data.
		method: 'POST',
		// Tell the server we're sending JSON.
		headers: {
		  'Content-Type': 'application/json',
		},
		// Body of the request is the JSON data we created above.
		body: JSONdata,
	  }
  
	  // Send the form data to our forms API on Vercel and get a response.
	  const response = await fetch(endpoint, options)
  
	  // Get the response data from server as JSON.
	  // If server returns the name submitted, that means the form works.
	  const result = await response.json()

	  const newUser = await fetch(`/api/user?email=${user.email}`, {
		method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({bookings: {increment: 1}}),
	  })

	  Router.push('/mybookings');
	}

	let today = new Date().toISOString().split('T')[0];
	if (user.email == email) {
		return (
			<>
				<div className="d-flex align-items-center justify-content-center vh-100">
					<div className="text-center">
						<p className="fs-3">This page is not available to the counselor.</p>
						<Link href="/bookings">
							<a href="" className="btn btn-light">See Bookings</a>
						</Link>
					</div>
				</div>
			</>
		)
	} else {
		if (uniqueBooking == null) {
			return (
				// We pass the event to the handleSubmit() function on submit.
				<form onSubmit={handleSubmit}>
					  <input type="date" id="date" name="date" onKeyDown={(e) => e.preventDefault()} min={today} />   
					  <input type="time" id="time" name="time" />
			
				  
				  <textarea className="input-group-text mt-1" type="text" id="message" name="message" placeholder="Message"></textarea>
				  
				  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
			  )
		} else {
			return (
				<>
					<div className="d-flex align-items-center justify-content-center vh-100">
						<div className="text-center">
							<p className="fs-3">You already have a session booked.</p>
							<Link href="/mybookings">
								<a href="" className="btn btn-light">My Bookings</a>
							</Link>
						</div>
					</div>
				</>
			)
		}
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
        const {user} = session;

		const thisBooking = await prisma.booking.findUnique({
			where: {
				email: user.email,
			}
		});

		const thisUser = await prisma.user.findUnique({
			where: {
				email: user.email,
			}
		});

        return {
            props: {
				user: user,
				uniqueBooking: thisBooking,
				uniqueUser: thisUser
			}
        }
}