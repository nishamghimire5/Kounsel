import Image from 'next/image'
import img from '../public/images/Students-rafiki.png'
const About = () => {
    return (
        <>
            <h1 className='title-position'>About Us</h1>
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
            <div className="about-footer-position">
            </div>
        </>
    )
}

export default About;