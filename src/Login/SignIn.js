// User state checks the "states" or changes made by the user
import React,{useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from 'react-router-dom'
//import "./SignIn.css"

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm(){
        return email.length>0 && password.length>0;
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        // <> </> needed to add-in the js code in react
        <>
        {/* <h1>SignIn</h1>
        <span>
            Don't have an account?  
            <Link to = "/signup">Sign Up</Link>
        </span>
        <br />
        <span><Link to = "/">Go back </Link></span> */}

        <div className = "Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size = "lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group size = "lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <br></br>
                <Button block size = "lg" type = "submit" disabled = {!validateForm()}>
                SignIn
                </Button>
            </Form>
        </div>
        </>
    );
}