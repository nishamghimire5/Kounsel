import Link from 'next/link'

const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            <div className="box ">
                <img className="img-responsive img-fluid bgHImg" src="./bgimage.jpg" alt="bg-picj" />
                {/* On the image text */}
                <div className="img_title">
                    {/* <div className="dropdown font-sans tracking-wider"> */}
                    <h3>Kounsel</h3>
                    <p>{slogan}</p>
                    <Link href="/singup">
                        <button className="btn getStartedBtn btn-outline-dark " type="button" >
                            Get Started
                        </button>
                    </Link>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default BgImage;