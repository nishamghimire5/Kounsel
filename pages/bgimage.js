import Link from 'next/link'
import bgimage from '../public/images/bg-image.gif'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react';

const BgImage = () => {

    const { data: session, status } = useSession();

    let slogan = "A Safe Space"
    return (
        <>
            {/* <section className='wrapper'> */}
            <div className='box'>
                <div className='bgHImg'>
                    <Image className="img-responsive img-fluid" src={bgimage} alt="bg-picj" objectFit="fill"
                        width={"1000px"}
                        height={"1000px"}
                    />
                </div>
                <div className='img_title'>
                    <h3>Kounsel</h3>
                    <p>{slogan}</p>
                    {status === "unauthenticated" &&
                        <Link href="">
                            <button className='cta-button' onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>Login</button>
                        </Link>
                    }
                </div>
            </div>
            {/* </section> */}
        </>
    )
}

export default BgImage;
























// import Link from 'next/link'
// import bgimage from './bgimage.jpg'
// import Image from 'next/image'

// const BgImage = () => {
//     let slogan = "A Safe Space"
//     return (
//         <>
//             {/* background image in Homepage */}
//             {/* <div style={{ 'height': "60vh", 'width': '100%', 'display':'block' }}> */}
//             <div className="box">

//                 {/* <div style={{ 'width':"100%" }}> */}
//                 {/* <div className="img-responsive img-fluid bgHImg"> */}
//                 <Image className="img-responsive img-fluid bgHImg" src={bgimage} alt="bg-picj" />
//                 {/* </div> */}
//                 {/* </div>  */}
//                 {/* On the image text */}
//                 <div className="img_title fs-3">
//                     {/* <div style={{ 'position': 'absolute', 'top': '50vh' }} className="img_title"> */}
//                     {/* <div className="dropdown font-sans tracking-wider"> */}
//                     <h3>Kounsel</h3>
//                     <p>{slogan}</p>
//                     <Link href="/singup">
//                         <button className="btn getStartedBtn btn-outline-dark " type="button" >
//                             Get Started
//                         </button>
//                     </Link>
//                     {/* </div> */}

//                 </div>
//             </div>

//         </>
//     )
// }

// export default BgImage;