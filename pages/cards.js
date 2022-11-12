import CardData from "./carddata";
import CardInfo from "./assets/data/councelling.json";
//import { propTypes } from 'react-bootstrap/esm/Image';
import Image from "next/image";
import counselorImage from "../public/images/Counselor-modified.png";
import webinar from "../public/images/Webinar.gif"
import session from "../public/images/Psychologist.gif"
import chat from "../public/images/Messaging.gif"
import group from "../public/images/GroupTherapy.gif"
import appointment from "../public/images/DatePicker.gif"
import meditate from "../public/images/Chakras.gif"
import explore from "../public/images/explore.gif"
import learn from "../public/images/Knowledge.gif"
import help from "../public/images/help.gif"






const Cards = () => {
  // let sectionTopText = `We can help you with`;
  return (
    <div>
      <div className="services">
       <hr className="my-5" />
        <p>Our Services</p>
      </div>


      <div className="position">
        <div className="cards-container">

        <div className="row gy-3 my-3">

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card">
              <Image src={session} className="card-img-top img-responsive img-fluid" alt="" width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Meet the counsellor</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card">
              <Image src={chat} className="card-img-top" alt="..." width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Chat with the counsellor anonymously</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={appointment} className="card-img-top" alt="..." width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Book Appointments</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={explore} className="card-img-top" alt="..." width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Explore Articles</h5>
              </div>
            </div>
          </div>

        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={webinar} className="card-img-top" alt="" width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Schedule Online Meetings</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={group} className="card-img-top" alt="..." width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Group Sessions</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={meditate} className="card-img-top" alt="" width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Ask for help</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={help} className="card-img-top" alt="..." width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Seek Guidance</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main">
            <div className="card" >
              <Image src={learn} className="card-img-top" alt="..." width={2000} height={2000} />
              <div className="card-body">
                <h5 className="card-title">Educate Yourself</h5>
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

      <div className="counselor-msg-container-position">
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

    </div>
  );
};

export default Cards;


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