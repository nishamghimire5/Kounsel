// User state checks the "states" or changes made by the user
import React,{useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from 'react-router-dom'
import '../styles/SignUp.css'

{/* <div className = "container"> */}

export default function SignIn() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [faculty, setFaculty] = useState("");
    const [regisNo, setRegistrationNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm(){
        return firstName.length>0 && lastName.length>0 && faculty.length>0 && regisNo.length>0 && email.length>0 && password.length>0;
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    return (
            <>
            <div class="bg-img">
            <div class="content">
            <header>Sign Up Form</header>

            <form action="#">

            <div class="field">
                <span class="fa fa-user"></span>
                <input type="text" required placeholder="First Name" />
            </div>

            <div class="field">
                <span class="fa fa-user"></span>
                <input type="text" required placeholder="Last Name" />
            </div>
            
            <div class="field">
                <span class="fa fa-user"></span>
                <input type="text" required placeholder="Faculty" />
            </div>
            
            <div class="field">
                <span class="fa fa-user"></span>
                <input type="text" required placeholder="Registration Number" />
            </div>

               <div class="field">
                  <span class="fa fa-user"></span>
                  <input type="text" required placeholder="Email or Phone" />
               </div>
               <div class="field space">
                  <span class="fa fa-lock"></span>
                  <input type="password" class="pass-key" required placeholder="Password" />
                  <span class="show">SHOW</span>
               </div>
               <div class="pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <div class="field">
                  <input type="submit" value="SIGN UP" />
               </div>
            </form>
            <div class="login">
               Or signup with
            </div>
            <div class="links">
               <div class="facebook">
                  <i class="fab fa-facebook-f"><span>Facebook</span></i>
               </div>
               <div class="instagram">
                  <i class="fab fa-instagram"><span>Instagram</span></i>
               </div>
            </div>
            <div class="signup">
               Already have an account?
               <a href="/signin">Login</a>
            </div>
         </div>
      </div>
    <div>
    </div>
    </>
    );
}