import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useSession, signIn, signOut} from 'next-auth/react';

const TitleBar = () => {
    const {data: session, status} = useSession();
    return (<div className="text_spacing">
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link href="/"><a className="text-decoration-none text-dark fs-3 fw-bold">Kounsel</a></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {status === "authenticated" &&
                        <Link href="/dashboard">
                            <a className='text-decoration-none text-dark mx-4 fs-6' href="">Dashboard</a>
                        </Link>}
                        {status === "unauthenticated" &&
                        <Link href="/">
                            <a className='text-decoration-none text-dark mx-4 fs-6' href="">Home</a>
                        </Link>}
                        <Link href="/about">
                            <a className='text-decoration-none text-dark mr-4 fs-6' href="">About</a>
                        </Link>
                        <Link href="/articles">
                            <a className='text-decoration-none text-dark mx-4 fs-6' href="">Articles</a>
                        </Link>
                        {status === "authenticated" &&
                        <Link href="/profile">
                            <a className='text-decoration-none text-dark mr-4 fs-6' href="">My Profile </a>
                        </Link>}
                        {status === "authenticated" &&
                        <Link href="">
                            <a className='text-decoration-none text-dark ml-4 mr-4 fs-6' href="" onClick={()=> signOut({callbackUrl: '/'})}>Logout {session.user.name}</a>
                        </Link>}
                        {status === "unauthenticated" &&
                        <Link href="">
                            <a className='text-decoration-none text-dark mr-4 fs-6' href="" onClick={()=> signIn('google', {callbackUrl: '/dashboard'})}>Login</a>
                        </Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}
export default TitleBar;
