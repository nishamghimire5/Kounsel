import { Card } from "react-bootstrap";


const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 " > <div className="card text-white card-has-bg click-col" >
                 <div className="card-body">
                    <a href="#">
                        <img className="card-img-overlay" src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
                        <h4 className="banner-content"><a className="text-white" herf="/">{props.textInPic}</a></h4>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default CardData;