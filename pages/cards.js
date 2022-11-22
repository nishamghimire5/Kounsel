import CardData from "./carddata";
import CardInfo from "./assets/data/councelling.json";
import Image from "next/image";
//import { propTypes } from 'react-bootstrap/esm/Image';

import counselorImage from "../public/images/Counselor-modified.png";
import webinar from "../public/images/1.gif";
import session from "../public/images/2.gif";
import chat from "../public/images/3.gif";
import group from "../public/images/4.gif";
import appointment from "../public/images/5.gif";
import meditate from "../public/images/6.gif";
import explore from "../public/images/7.gif";
import learn from "../public/images/8.gif";
import help from "../public/images/9.gif";

const Cards = () => {
  let sectionTopText = `Our Services`;
  const imagesHere = [
    webinar,
    session,
    chat,
    group,
    appointment,
    meditate,
    explore,
    learn,
    help,
  ];
  return (
    <div>
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col text-left mb-5">
              <h1 className="services">{sectionTopText}</h1>
              {/* <p className="lead">Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar. </p> */}
            </div>
          </div>
          <div className="row" style={{ display: "flex" }}>
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
        <br />
        <br />

        {/* Message from the counsellor */}

        {/* overflow again caused by this line */}
        <div className="wrapper">
          <div className="container">
          <h2 className="title text-left">Meet the Counselor</h2><br/>
          <div
            className="container"
            style={{
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
              <div className="col-sm col-md col-lg">
                <p
                  style={{
                    position: "relative",
                    top: "7rem",
                    display: "inline-block",
                  }}
                >
                  The counselor of Kathmandu University.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
      </section>
    </div>
  );
};

export default Cards;
