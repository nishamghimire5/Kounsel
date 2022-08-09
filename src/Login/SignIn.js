// User state checks the "states" or changes made by the user
import React,{userState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from 'react-router-dom'
//import "./SignIn.css"

export default function SignIn() {
    return (
        // <> </> needed to add-in the js code in react
        <>
        <h1>SignIn</h1>
        <span>
            Don't have an account?  
            <Link to = "/signup">Sign Up</Link>
        </span>
        <br />
        <span><Link to = "/">Go back </Link></span>
        </>
    );
}