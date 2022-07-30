const ActiveCoursel = (props) => {
    return (
        <div className="col-md-4">
            <div className="card mb-2">
                <img className="card-img-top" src={props.imgLink}
                    alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{props.nameInCourosel}</h4>
                    <p className="card-text">{props.sayInCourosel}</p>
                </div>
            </div>
        </div>
    )
}

export default ActiveCoursel;