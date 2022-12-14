import CardData from './carddata';
import CardInfo from './assets/data/councelling.json';
//import { propTypes } from 'react-bootstrap/esm/Image';

const Cards = () => {
    let sectionTopText = `We can help you with`;
    return (<div>
        <section className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h1 className="display-4">{sectionTopText}</h1>
                        {/* <p className="lead">Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar. </p> */}
                    </div>
                </div>
                <div className='row' style={{ display: 'flex' }}>
                    {CardInfo.map((card, index) => {
                        return (<CardData key={index} textInPic={card.title} imgLink={card.image} />)
                    }
                    )}
                </div>
            </div>
        </section>
    </div>)
}

export default Cards;