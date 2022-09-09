const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main"><div className="card text-white card-has-bg click-col" >
            <a href="#">
                <img className="card-img " src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
                <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                        <h4 className="card-title mt-0"><div className="card-img">{props.textInPic}</div></h4>
                    </div>
                </div>
            </a>
        </div></div>
    )
}

export default CardData;