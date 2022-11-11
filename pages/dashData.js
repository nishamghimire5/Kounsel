const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (
        <div style={{ height: "50px" }} className="col-sm-12 col-md-6 col-lg-4 main mb-5">
            <div className="card card-has-bg" >
                <div className="rounded-lg">
                    {/* <img className="card-img " src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" /> */}
                    {/* <div className=" flex-column "> */}
                    {/* <div className="card-body"> */}
                    <h4 className="card-title">
                        <div className=" text-center">
                            <div className="text-primary">
                                Email: {props.email}
                            </div>
                            <br />
                            <div className="text-info">
                                Name: {props.name}
                            </div>
                        </div>
                    </h4>
                </div>
            </div>
        </div>
        // </div></div>
    )
}

export default CardData;