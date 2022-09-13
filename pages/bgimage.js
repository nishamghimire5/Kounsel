import Link from 'next/link'
import bgimage from './bgimage.jpg'
import Image from 'next/image'

const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            {/* <div style={{ 'height': "60vh", 'width': '100%', 'display':'block' }}> */}
            <div className="box">

                {/* <div style={{ 'width':"100%" }}> */}
                {/* <div className="img-responsive img-fluid bgHImg"> */}
                <Image className="img-responsive img-fluid bgHImg" src={bgimage} alt="bg-picj" />
                {/* </div> */}
                {/* </div>  */}
                {/* On the image text */}
                <div className="img_title">
                    {/* <div style={{ 'position': 'absolute', 'top': '50vh' }} className="img_title"> */}
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