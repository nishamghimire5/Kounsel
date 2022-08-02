import image from '../../Assets/Images/bgimage.jpg';
import styles from '../../styles/HomePage.module.css';
import Cards from '../../Cards/Cards'
import Testimonials from '../../Testimonials/Testimonials.js';
import { Link } from "react-router-dom"

const HomePage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* background image in Homepage */}
            <div className={` box ${styles.box}`}>
                <img className={`img-responsive img-fluid ${styles.bgHImg} `} src={image} alt="bg-pic" />
                {/* On the image text */}
                <div className={styles.img_title}>
                    <div className="dropdown font-sans tracking-wider">
                        <h2>Kounsel</h2>
                        <p>{slogan}</p>
                        <Link to="/singup">
                            <button className={`styles.btn ${styles.getStartedBtn} btn-outline-dark`} type="button" >
                                Get Started
                            </button>
                        </Link>
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