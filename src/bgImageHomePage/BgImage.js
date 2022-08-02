import styles from '../styles/bgImage.module.css';
import image from '../Assets/Images/bgimage.jpg';
import { Link } from "react-router-dom"

const BgImage = () => {
    let slogan = "A Safe Space"
    return (
        <>
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
        </>
    )
}

export default BgImage;