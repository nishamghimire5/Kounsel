import CardData from "./carddata";
import CardInfo from "./assets/data/councelling.json";
import counselorImage from "../public/images/Counselor-modified.png";
import Image from "next/image";
import webinar from "../public/images/1.gif"
import session from "../public/images/2.gif"
import chat from "../public/images/3.gif"
import group from "../public/images/4.gif"
import appointment from "../public/images/5.gif"
import meditate from "../public/images/6.gif"
import explore from "../public/images/7.gif"
import learn from "../public/images/8.gif"
import help from "../public/images/9.gif"
//import { propTypes } from 'react-bootstrap/esm/Image';

const Cards = () => {
  let sectionTopText = `Our Services`;
  const imagesHere = [webinar,session,chat,group,appointment,meditate,explore,learn,help];
  return (
    <div>
      <section className="wrapper card-position">
        <div className="container">
          <div className="row">
            <div className="col mb-5 services">
              <h1>{sectionTopText}</h1>
              {/* <p className="lead">Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar. </p> */}
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", position: "relative", left: "10%" }}
          >
            {CardInfo.map((card, index) => {
              return (
                <CardData
                  key={index}
                  textInPic={card.title}
                    image={imagesHere[index]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Message from the counsellor */}

      {/* overflow again caused by this line */}
      <h2
        className="title"
        style={{ position: "absolute", top: "139rem", left: "15%" }}
      >
        Message from the Counsellor
      </h2>
        <div
          className="container"
          style={{
            position: "relative",
            top: "60rem",
            background: "#def6f5",
            height: "25rem",
          }}
        >

        <div className="row">
          <div
            className="col-sm col-md col-lg"
            style={{
              position: "relative",
              left: "5rem",
              top: "3rem",
              float: "left",
            }}
          >
            <Image
              src={counselorImage}
              objectFit="contain"
              width={"300rem"}
              height={"300rem"}
              alt="image of the counselor"
            />
          </div>
          <div className= 'col-sm col-md col-lg'>
          <p
            style={{
              position: "relative",
              top: "7rem",
              display: 'inline-block',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Cards;
