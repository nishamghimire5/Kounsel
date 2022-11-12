import CardData from './carddata';
import CardInfo from './assets/data/councelling.json';
//import { propTypes } from 'react-bootstrap/esm/Image';

const Cards = () => {
    let sectionTopText = `Our Services`;
    return (<div>
        <section className="wrapper card-position">
            <div className="container">
                <div className="row">
                    <div className="col mb-5 services">
                        <h1>{sectionTopText}</h1>
                        {/* <p className="lead">Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar. </p> */}
                    </div>
                </div>
                <div className='row' style={{ display: 'flex', position:'relative', left:'10%'}}>
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