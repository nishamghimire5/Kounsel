import Link from 'next/link'

const TitleBar = () => {
<<<<<<< HEAD
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
=======
    return (
        <>
        <header>
            <nav>
                <div class = 'nav-container'>
                    <div class = 'nav-logo'>
                        <Link href = "/"><a><h3>Kounsel</h3></a></Link>
                    </div>
                    <div class = 'nav-menu'>
                        <ul class = 'nav__links'>
                        <Link href = "/"><a><li>Home</li></a></Link>
                        <Link href = "/about"><a><li>About</li></a></Link>
                        <Link href = "/articles"><a><li>Articles</li></a></Link>
                        <Link href = "/dashboard"><a><li>Dashboard</li></a></Link>
                        <Link href = "/login"><a><li><button class='cta-button'>Login</button></li></a></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
>>>>>>> 48bb8b49a9ab185a876fa5baa2e2ce03102c6a77
    )
}
export default TitleBar;
