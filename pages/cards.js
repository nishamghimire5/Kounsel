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
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
                <h5 class="card-title">Meet the councelor</h5>
            </div>
            </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
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
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="/pages/assets/images/Contemplating-bro.png" class="card-img-top" alt="..." layout='fill'/>
            <div class="card-body">
            <h5 class="card-title">Meet the councelor</h5>
            </div>
        </div>
        </div>
        </div>

        <br/>
        <br />

        <div class="w-75 p-3" style={{marginRight : 5+'em'}}>
            <div class ="">
            <h3> Message from the councelor</h3>
            <Image src="" layout='fill' />
            <div class="textCouncelor">
                <p>Bla bla bla bla bla<br/>
                Bla bla bla bla bla<br/>
                Bla bla bla bla bla<br/>
                Bla bla bla bla bla<br/>
                </p>
            </div>
            </div>
        </div>
        </>
    );
}

export default Cards;