import image from './Images/bgimage1.jpg';
import './HomePage.css'
import Cards from './Cards'
import Testimonials from './Testimonials'

const HomePage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            <div className="box ">
                <img className="img-responsive img-fluid bgHImg" src={image} alt="bg-pic" />
                {/* On the image text */}
                <div className="img-title">
                    <div className="dropdown font-sans tracking-wider">
                        <h2>Kounsel</h2>
                        <p>{slogan}</p>
                        <button className="btn getStartedBtn btn-outline-dark " type="button" >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            {/* cards of what we can help with section*/}
            <Cards />
            {/* Testimonials section*/}
            <Testimonials />
        </>
    );
}
export default HomePage;