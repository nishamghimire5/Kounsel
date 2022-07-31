const TitleBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <a className="navbar-brand" href="/">Kounsel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Articles</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href='/'>Sign In</a>
                                <a className="dropdown-item" href='/'>Sign Up</a>
                                {/* <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href='/'>Something else here</a> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default TitleBar;
