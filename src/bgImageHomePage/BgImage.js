import styles from '../styles/bgImage.css';
import image from '../Assets/Images/bgimage.jpg';
import { Link } from "react-router-dom"

const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            <div className="box ">
                <img className="img-responsive img-fluid bgHImg" src={image} alt="bg-pic" />
                {/* On the image text */}
                <div className="">
                    <div className="dropdown font-sans tracking-wider">
                        <h2>Kounsel</h2>
                        <p>{slogan}</p>
                        <Link to="/singup">
                            <button className="btn getStartedBtn btn-outline-dark " type="button" >
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgImage;