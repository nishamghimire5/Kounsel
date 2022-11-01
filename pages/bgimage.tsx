import Link from 'next/link'
import Image from 'next/image'
import 'animate.css'
const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            <div style={{ 'height': "60vh", 'width': '100%', 'display':'block', marginLeft: 10 +'em'}}>

                 <div style={{ 'width':"50%" }} className="animate__animated animate__backInUp">
                </div> 

                {/* On the image text */}
                <div className="img_title  animate__animated animate__backInUp">
                    {/* <div className="dropdown font-sans tracking-wider"> */}
                    <h1>Kounsel</h1>
                    <p>{slogan}</p><br/>
                    <Link href = "/singup">
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