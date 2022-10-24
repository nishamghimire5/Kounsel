import Link from 'next/link'
import bgimage from './bgimage.jpg'
import Image from 'next/image'

const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
<<<<<<< HEAD
            {/* <div style={{ 'height': "60vh", 'width': '100%', 'display':'block' }}> */}
            <div className="box">

                {/* <div style={{ 'width':"100%" }}> */}
                {/* <div className="img-responsive img-fluid bgHImg"> */}
                <Image className="img-responsive img-fluid bgHImg" src={bgimage} alt="bg-picj" />
                {/* </div> */}
                {/* </div>  */}
                {/* On the image text */}
                <div className="img_title fs-3">
                    {/* <div style={{ 'position': 'absolute', 'top': '50vh' }} className="img_title"> */}
=======
            <div style={{ 'height': "60vh", 'width': '100%', 'display':'block' }}>

                 <div style={{ 'width':"100%" }}>
                    <Image src={bgimage} 
                        objectFit='contain' height={'1900rem'} alt="bg-picj" />
                </div> 

                {/* On the image text */}
                <div style={{ 'position': 'absolute', 'top': '50vh' }} className="img_title">
>>>>>>> 9ecfdfe771989c96732f7f1413fd976997016d3d
                    {/* <div className="dropdown font-sans tracking-wider"> */}
                    <h3>Kounsel</h3>
                    <p>{slogan}</p>
                    <Link to="/singup">
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