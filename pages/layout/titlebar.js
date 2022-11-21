import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSession, signIn, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import email from '../../counselormail';
import fixName from '../../fixname';

export default function TitleBar() {
    const { data: session, status } = useSession();

    let finalName = " ";

    if (status === "authenticated") {
        finalName = fixName(session.user.name);
    }

    

    return (<div className="text_spacing">
        <Navbar expand="lg" style={{background:'#3dccc7'}}>
            <Container fluid>
                <Link href="/"><a className="text-decoration-none text-light fs-3 fw-bold">Kounsel</a></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-4 my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        {status === "authenticated" &&
                            <Link href="/dashboard">
                                <a className='text-decoration-none pt-2 text-light mx-4 fs-6' href="" >Dashboard</a>
                            </Link>}
                        {status === "unauthenticated" &&
                            <Link href="/">
                                <a className='text-decoration-none pt-2 text-light mx-4 fs-6' href="" >Home</a>
                            </Link>}
                        <Link href="/about">
                            <a className='text-decoration-none pt-2 text-light mr-4 fs-6' href="" >About</a>
                        </Link>
                        <Link href="/articles">
                            <a className='text-decoration-none pt-2 text-light mx-4 fs-6' href="" >Articles</a>
                        </Link>
                        {status === "authenticated" && session.user.email != email &&
                            <Link href="/mybookings">
                                <a className='text-decoration-none pt-2 text-light mr-4 fs-6' href="" >My Bookings </a>
                            </Link>}
                            {status === "authenticated" && session.user.email == email &&
                            <Link href="/bookings">
                                <a className='text-decoration-none pt-2 text-light mr-4 fs-6' href="" >Bookings </a>
                            </Link>}
                        {status === "authenticated" &&
                            <Link href="/profile">
                                <a className='text-decoration-none pt-2 text-light mx-4 fs-6' href="" >My Profile </a>
                            </Link>}
                        {status === "authenticated" &&
                            <Link href="">
                                <button ><a className='text-decoration-none text-light mr-4 fs-6' href="" onClick={() => signOut({ callbackUrl: '/' })} >Logout - {finalName}</a></button>
                            </Link>}
                        {status === "unauthenticated" &&
                            <Link href="">
                                <button className='cta-button'><a className='text-decoration-none text-dark mr-4 fs-6' href="" onClick={() => signIn('google', { callbackUrl: '/dashboard' })} >Login</a></button>
                            </Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}
