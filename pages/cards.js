import CardData from './carddata';
import CardInfo from './assets/data/councelling.json';
import counselorImage from '../public/images/Counselor-modified.png'
import Image from 'next/image'
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

        {/* Message from the counsellor */}

        {/* overflow again caused by this line */}
        <h2 className='title'  style={{position: 'relative', top: '50rem', left:'15%'}}>Message from the Counsellor</h2>
        <div>        
        <div className='container' style={{position: 'relative', top: '60rem', background : '#def6f5', height: '25rem'}}>
            <div style={{position:'relative', left:'5rem', top: '3rem', float: 'left'}}>
            <Image
            src={counselorImage}
            objectFit="contain"
            width={"300rem"}
            height={"300rem"}
            alt="image of the counselor"
            />
            </div>

            <p style={{ position: "relative", left: "15rem", width: "40rem", top: "7rem"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        </div>
    </div>)
}

export default Cards;