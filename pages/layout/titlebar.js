import Link from 'next/link'

const TitleBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <p className="navbar-brand">Kounsel</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul style={{'width':"30%",'display':'flex', 'justifyContent':"space-between",'listStyle':"none" }}>
                        <li className="nav-item active">
                            <Link className="nav-link" href="/"><a className='sr-only'>Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about"><a>About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/articles"><a>Articles</a></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="/login" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a>Login</a></Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" href='/signin'><a>Sign in</a></Link>
                                <Link className="dropdown-item" href='/singup'><a>Sign up</a></Link>
                                {/* <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to='/'>Something else here</Link> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default TitleBar;
