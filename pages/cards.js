import Image from 'next/image';
import CardData from './carddata'; 
import CardInfo from './assets/data/councelling.json';
import { relative } from 'path';

const Cards = () => {
    let sectionTopText = `We can help you with`;
    return (
        <>

        <h1 class="heading1">Our Services.</h1>
        <div className= "row position animate__animated animate__backInUp">
        <hr className="my-5" />
        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/premium-vector/woman-talking-with-psychologist-psychology-therapy-mental-health_254685-1243.jpg?w=1380" class="card-img-top" alt="" width={2000} height={1400}/>
            <div class="card-body">
                <h5 class="card-title">Meet the counsellor</h5>
            </div>
            </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/premium-vector/people-with-masks-using-smartphones_213110-1146.jpg" class="card-img-top" alt="..." width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Chat with the counsellor anonymously</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_52683-39832.jpg?w=1380&t=st=1662908942~exp=1662909542~hmac=2b868b23f004d5bd519f57dc9323a43564fea85b57cccc3204ef47eaef061e16" class="card-img-top" alt="..." width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Book Appointments</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/free-vector/tiny-creative-people-writing-poems-typewriter-persons-reading-antique-books-feather-ink-bottle-flat-vector-illustration-literature-poetry-concept-banner-website-design-landing-page_74855-23203.jpg?w=1380&t=st=1662909154~exp=1662909754~hmac=b8dd09942c9fdf79a981677deb687a04bd73e7a47455fb9d8dd108a037ad6676" class="card-img-top" alt="..." width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Explore Articles</h5>
            </div>
        </div>
        </div>
        </div>

        <br />

        <div className= "row position animate__animated animate__backInUp">
        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/premium-vector/communication-dialog-conversation-online-forum_333239-88.jpg" class="card-img-top" alt="" width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Schedule Online Meetings</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/free-vector/group-therapy-illustrated_23-2148654878.jpg?w=826&t=st=1662909766~exp=1662910366~hmac=aa4e26cd9554572b1f16e19867a189c257f51b70b093c33b9fef72f714870a3c" class="card-img-top" alt="..." width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Group Sessions</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://img.freepik.com/free-vector/woman-practicing-yoga-mountains-female-character-enjoying-nature-doing-sport-mat-flat-vector-illustration-healthy-lifestyle-meditation-concept-banner-website-design-landing-web-page_74855-21104.jpg?w=1380&t=st=1662910019~exp=1662910619~hmac=67cc135d8ff95f47339a801054f2399b145e59e4a5d5ef4552dbdebd15458a29" class="card-img-top" alt="" width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Ask for help</h5>
            </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card" style={{width: 18 +'rem'}}>
            <Image src="https://cdn.dribbble.com/users/5286978/screenshots/11351248/adspur-_mental_health-01-02.png" class="card-img-top" alt="..." width={2000} height={1400}/>
            <div class="card-body">
            <h5 class="card-title">Educate Yourself</h5>
            </div>
        </div>
        </div>
        </div>

        <br/>
        <br />
        <div className= "row position animate__animated animate__backInUp">
        <h1 className='heading2'>Message from the counsellor.</h1>
        <hr className="my-5" />
        
        
        <div class="messageBody messageImg message_p message messagePosition">
        <Image src='https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/287165836_2479732775501691_2865023376074217572_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5iWuhg5BoH0AX8DXpup&_nc_oc=AQmT6N5PH9o9tCbApZuHecJGb-LUtYfGT7CX2GaeRdSpiJ-_4H75KqIx_9iY32Ot5ok&tn=V7O4GUNykDFZJZQ-&_nc_ht=scontent.fktm3-1.fna&oh=00_AT_4nwtfK6tRt9UMTaTvy_J-bEnhOTS-XJVofJLqQqq_TA&oe=6323F90D' width="500" height="600" alt='' />

        <p className='messageBody'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae <br/>
        voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>
        </div>
        </div>
        </>
    );
}

export default Cards;