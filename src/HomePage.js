import image from './Images/bgimage1.jpg';
import './HomePage.css'

const HomePage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            <div className="box ">
                <img className="img-responsive img-fluid bgHImg" src={image} alt="bg-pic" />
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
        </>
    );
}
export default HomePage;