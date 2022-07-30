const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (

        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 " > <div className="card text-white card-has-bg click-col" >
            <img className="card-img" src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
            <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                    <h4 className="card-title mt-0 "><a className="text-white" herf="/">{props.textInPic}</a></h4>
                </div>
                <div className="card-footer">

                    {/* <div className="media">
                        <p className="m-3" >hello</p>
                    </div> */}
                </div>
            </div>
        </div></div >

    )
}

export default CardData;