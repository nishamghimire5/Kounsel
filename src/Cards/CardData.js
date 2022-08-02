import styles from '../styles/Cards.module.css';

const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (
        <div className={`col-sm-12 col-md-6 col-lg-4 mb-4 ${styles.main}`} > <div className="card text-white card-has-bg click-col" >
            <a href="#">
                <img className={`${styles["card-img"]} card-img`} src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
                <div className={`${styles["card-img-overlay"]} d-flex flex-column card-img-overlay`}>
                    <div className={`${styles["card-body"]} card-body`}>
                        <h4 className={`card-title mt-0 ${styles.hower}`}><a className="text-white card-img" herf="/">{props.textInPic}</a></h4>
                    </div>
                </div>
            </a>
        </div></div>
    )
}

export default CardData;