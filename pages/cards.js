import CardData from "./carddata";
import CardInfo from "./assets/data/councelling.json";
//import { propTypes } from 'react-bootstrap/esm/Image';
import Image from "next/image";
import counselorImage from "../public/images/Counselor-modified.png";
import counsel from "../public/images/Counsel.gif"

const Cards = () => {
  // let sectionTopText = `We can help you with`;
  return (
    <div>
      <div className="services">
      {/* <hr className="my-5" /> */}
        <p>Our Services</p>
      </div>

      {/* <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              {/* <h1 className="display-4">{sectionTopText}</h1> */}
      {/* <p className="lead">Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar. </p> */}
      {/* </div>
          </div>
          <div className="row" style={{ display: "flex" }}>
            {CardInfo.map((card, index) => {
              return (
                <CardData
                  key={index}
                  textInPic={card.title}
                  imgLink={card.image}
                />
              );
            })}
          </div>
        </div>
      </section> */}
      <div className="cards-container">

        <div className= "row position animate__animated animate__backInUp">
        {/* <hr className="my-5" /> */}
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
        </div>
      <div>
        <h3 className="counselor-title">Message from the Counselor</h3>
        <div className="counselor-img">
          <Image
            src={counselorImage}
            objectFit="fill"
            width={"500rem"}
            height={"500rem"}
            alt="image of the counselor"
          />
        </div>
      </div>

      <div className="counselor-msg-container">
        <p style={{ position: "relative", left: "0rem", width: "40rem" }}>
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
  );
};

export default Cards;
