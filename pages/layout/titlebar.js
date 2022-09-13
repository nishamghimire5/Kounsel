import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TitleBar = () => {
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
                        <Link href="/">
                            <a className='text-decoration-none text-dark mx-4 fs-6' href="">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className='text-decoration-none text-dark mr-4 fs-6' href="">About</a>
                        </Link>
                        <Link href="/articles">
                            <a className='text-decoration-none text-dark mx-4 fs-6' href="">Articles</a>
                        </Link>
                        <Link href="/signin">
                            <a className='text-decoration-none text-dark mr-4 fs-6' href="">Login</a>
                        </Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Articles</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
    //     return (
    //         <>
    //             <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
    //                 <Link className="navbar-brand" href="/">
    //                     <a href="">Kounsel</a>
    //                 </Link>
    //                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //                     <ul className="navbar-nav">
    //                         <li className="nav-item active">
    //                             <Link className="nav-link" href="/"><a href="">Home</a> <span className="sr-only"></span></Link>
    //                         </li>
    //                         <li className="nav-item">
    //                             <Link className="nav-link" href="/about"><a href="">About</a></Link>
    //                         </li>
    //                         <li className="nav-item">
    //                             <Link className="nav-link" href="/articlesshow"><a href="">Articles</a></Link>
    //                         </li>
    //                         <li className="nav-item dropdown">
    //                             <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="">Login</a>
    //                             </Link>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                                 <Link className="dropdown-item" href='/signin'><a href="">Sign In</a></Link>
    //                                 <Link className="dropdown-item" href='/singup'><a href="">Sign Up</a></Link>
    //                                 {/* <div className="dropdown-divider"></div>
    //                                 <Link className="dropdown-item" href='/'>Something else here</Link> */}
    //                             </div>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </nav>
    //         </>
    //     )
}
export default TitleBar;
