import Link from 'next/link'

const TitleBar = () => {
    return (
        <>
            <header>
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
            </header>
        </>
    )
}
export default TitleBar;
