import Link from 'next/link'

const TitleBar = () => {
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
    )
}
export default TitleBar;
