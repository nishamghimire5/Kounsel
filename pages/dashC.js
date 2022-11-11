import CardData from './dashData';
import CardInfo from './assets/data/dashboard.json';

const Cards = () => {
    let sectionTopText = `Recent Accounts`;
    return (<div>
        <h1 style={{ marginLeft: "46rem", marginBottom: "135px" }} className="status display-5 text-success text-lg-left">What's you status?</h1>
        <section className="wrapper">
            <div className="container">
                <center>
                    <button type="button" style={{ width: "300px" }} className="col-sm-6 col-md-6 col-lg-6 btn btn-success mx-3 ">
                        Toggle
                    </button>
                </center>


                <div className="row">
                    <div className="col text-center mb-5 ">
                        <h1 style={{ marginRight: "5rem" }} className="display-5 text-success mb-5">{sectionTopText}</h1>
                        <br /> <br />
                    </div>
                </div>
                <div className='row mb-5' style={{ display: 'flex' }}>
                    {CardInfo.map((card, index) => {
                        return (<CardData key={index} count={index + 1} email={card.email} date={card.date} msg={card.msg} name={card.name} />)
                    }
                    )}
                </div>
            </div>
        </section>
    </div>)
}

export default Cards;