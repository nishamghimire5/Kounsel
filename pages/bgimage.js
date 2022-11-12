import Link from "next/link";
import bgimage from "../public/images/bg-image.gif";
import Image from "next/image";

const BgImage = () => {
    let slogan = "A Safe Space";
    return (
        <>
            <div className="box">
                <div className="home-image-position img-responsive img-fluid">
                    <Image
                        src={bgimage}
                        objectFit="fill"
                        width={"700px"}
                        height={"700px"}
                        alt="bg-picj"
                    />
                </div>
            </div>
            <div className="img_title  animate__animated animate__backInUp">
                <h1 style={{ letterSpacing: "10px" }}>Kounsel</h1>
                <p style={{ letterSpacing: "15px" }} className="">{slogan}</p>
                <br />
                <Link href="/singup">
                    <button style={{ backgroundColor: "#dcdd9a" }} className="ms-5 mt-5">Get Started</button>
                </Link>
            </div>
        </>
    );
};

export default BgImage;
