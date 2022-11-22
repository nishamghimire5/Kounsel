import Image from "next/image";
import img from "../public/images/Students-rafiki.png";
import FooterPage from "./layout/footer";
const About = () => {
  return (
    <>
      <div style={{ position: "absolute", left: "15%", top: "10rem" }}>
        <h1 className="ms-5 ps-5 title">About Us</h1>
      </div>

      <div className="container">
        <div className="row">
          
          <div className="col-sm col-md col-lg">
            <div className="left-aligned-img">
              <Image
                src={img}
                width="500px"
                height="500px"
                layout="fixed"
                alt="illustration of students"
              />
            </div>
          </div>

          <div
            className="col-sm col-md col-lg"
            style={{ position: "relative", top: "10rem" }}
          >
            <div className="body-text">
              <p>
              The website will provide counseling services to individuals of Kathmandu University who are experiencing difficulties in their lives. 
              The website will offer a range of services including booking an appointment, online counseling, and many more. 
              The website will also provide information on a range of topics such as mental health, relationships, and grief.

 
              </p>
            </div>
          </div>

        </div>
      </div>
      <br /><br />
    </>
  );
};

export default About;
