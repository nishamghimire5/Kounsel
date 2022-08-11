// User state checks the "states" or changes made by the user
import React,{useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from 'react-router-dom'
import '../styles/SignIn.css'

{/* <div className = "container"> */}

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
            {/* <> </> needed to add-in the js code in react */}
            <>
                <h1 className="heading">SignIn</h1>
                
                <br />
                <br />
                <img width = "300" src="https://img.freepik.com/free-vector/notebook-concept-illustration_114360-387.jpg?w=826&t=st=1660200940~exp=1660201540~hmac=1c3efda040d782499db9b0fff61f26d623c6e3e9bc4ebafad2311078dfe62879"></img>
                <Form class="form" onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label className="">Email</Form.Label>
                        <Form.Control className = "w-50" autoFocus type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <br />
                    <br />
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className = "w-50" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        SignIn
                    </Button>
                </Form>
            </><br />
            <span>
                Don't have an account?  
                <Link to="/signup"> Sign Up</Link>
                <br /><br />
                <Link to="/">Go back </Link>
            </span>
            </>
    );
}