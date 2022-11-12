import Link from "next/link";

const TitleBar = () => {
  return (
    <>
      <header>      
      <nav class="navbar navbar-expand-lg  nav-container">
        <a class="navbar-brand nav-logo" href="/">
          Kounsel
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style={{position: 'relative', left:'47%'}}>
            <ul className="nav__links">
            <Link class="nav-item nav-link active" href="/">
              <li>Home <span class="sr-only"></span></li>
            </Link>
            <Link class="nav-item nav-link" href="/about">
              <li>About</li>
            </Link>
            <Link class="nav-item nav-link" href="articles">
              <li>Articles</li>
            </Link>
            <Link class="nav-item nav-link" href="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link class="nav-item nav-link" href="/login">
              <li>Login</li>
            </Link>
            <button className="cta-button">Get Started</button>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
};
export default TitleBar;


      {/* <header>
                <nav>
                    <div className='nav-container'>
                        <div className='nav-logo'>
                            <Link href="/"><a><h2>Kounsel</h2></a></Link>
                        </div>
                        <div className='nav-menu'>
                            <ul className='nav__links'>
                                <Link href="/"><a><li>Home</li></a></Link>
                                <Link href="/about"><a><li>About</li></a></Link>
                                <Link href="/articles"><a><li>Articles</li></a></Link>
                                <Link href="/dashboard"><a><li>Dashboard</li></a></Link>
                                <Link href="/login"><a><li>Login</li></a></Link>
                                <Link href="/sing-up"><a><li><button className='cta-button'>Get Started</button></li></a></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header> */}