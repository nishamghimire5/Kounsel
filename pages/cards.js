import Image from 'next/image';
import CardData from './carddata'; 
import CardInfo from './assets/data/councelling.json';
import { relative } from 'path';

const Cards = () => {
    let sectionTopText = `We can help you with`;
    return (
        <>
        <div className= "row position animate__animated animate__backInUp">
        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
                <h5 class="card-title">Meet the councelor</h5>
            </div>
            </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>
        </div>

        <br />

        <div className= "row position animate__animated animate__backInUp">
        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>
        </div>

        <br/>
        <br />

        <div class="card bg-dark text-white" style={{ MarginLeft: 11 + 'em', maxWidth: 22 + 'em'}} >
            <Image class="card-img" src="" alt="Card image" layout="fill"/>
            <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
            </div>
            </div>


        </>
    );
}

export default Cards;