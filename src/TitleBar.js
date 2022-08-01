import { Link, useMatch, useResolvedPath } from "react-router-dom"

const TitleBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <Link className="navbar-brand" to="/">Kounsel</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/about">About</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/articles">Articles</CustomLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <CustomLink className="dropdown-item" to='/signin'>Sign In</CustomLink>
                                <CustomLink className="dropdown-item" to='/singup'>Sign Up</CustomLink>
                                {/* <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to='/'>Something else here</Link> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }
}
export default TitleBar;
