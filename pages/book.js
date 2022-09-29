import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {useSession, getSession, signIn, signOut} from 'next-auth/react';

export default function Book() {
	const [startDate, setStartDate] = useState(new Date());
	// Handles the submit event on form submit.
	const handleSubmit = async (event) => {
	  // Stop the form from submitting and refreshing the page.
	  event.preventDefault()
  
	  // Get data from the form.
	  const data = {
		date: startDate.toString(),
		email: event.target.email.value,
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
	  alert(`Is this what you submitted: ${result.data}`)
	}
	return (
	  // We pass the event to the handleSubmit() function on submit.
	  <form onSubmit={handleSubmit}>
		<DatePicker selected={startDate} onChange=
			{(date) => setStartDate(date)} dateFormat="MM/dd/yyyy h:mm aa" showTimeInput />
  
		<input type="text" id="email" name="email" placeholder="Email" required />
		<input type="text" id="message" name="message" placeholder="Message" />
  
		<button type="submit">Submit</button>
	  </form>
	)
  }


/*export async function getServerSideProps(context) {
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
        return {
            props: {user},
        }
}*/