import Link from 'next/link'
import Image from 'next/image'
import 'animate.css'
const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            <div style={{ 'height': "60vh", 'width': '100%', 'display':'block' }}>

                 <div style={{ 'width':"50%" }} className="animate__animated animate__backInUp">
                    
                    <Image src="/pages/assets/images/Peace of mind-bro.png" 
                        objectFit='contain' width ={'1900rem'} height={'1900rem'} alt="bg-picj" layout='responsive' />
                    
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