import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useSession, signIn, signOut} from 'next-auth/react';

const TitleBar = () => {
<<<<<<< HEAD
    return (
        <>
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Kounsel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</>
=======
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
>>>>>>> d6edd3f3d6df09f39215c9d7cdec8c1ab055f8e4
    )
}
export default TitleBar;
