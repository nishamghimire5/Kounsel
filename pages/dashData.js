const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 main mb-5">
            <div className="card card-has-bg" >
                <div className="rounded-lg">
                    <div className=" flex-column ">
                        <div className="card-body">
                            <h4 className="card-title">
                                <div className=" text-center">
                                    <div className="text-danger mb-3">
                                        {props.count}
                                    </div>
                                    <div className="text-primary mb-3">
                                        Email: {props.email}
                                    </div>
                                    <br />
                                    <div className="text-info mb-3">
                                        Name: {props.name}
                                    </div>
                                    <div className="text-info mb-3">
                                        Date: {props.date}
                                    </div>
                                    <div className="text-info mb-3">
                                        Message: {props.msg}
                                    </div>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default CardData;