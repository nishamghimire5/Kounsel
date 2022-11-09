import Image from 'next/image'
import img from '../public/images/Students-rafiki.png'
const About = () => {
<<<<<<< HEAD
    return (<><h2>About</h2>
    
</>)
=======
    return (
        <>
            <div className='title-position'>
                <h1 className='ms-5 ps-5'>About Us</h1>
            </div>
            <div>
                <div class="left-aligned-img">
                    <Image src={img} width="500px" height="500px" layout="fixed" alt="illustration of students" />
                </div>
                <div class="body-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
>>>>>>> prek
}

export default About;