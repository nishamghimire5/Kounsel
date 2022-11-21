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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.

 
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
