import Link from "next/link";
import bgimage from "../public/images/bg-image.gif";
import Image from "next/image";

const BgImage = () => {
    let slogan = "A Safe Space";
    return (
        <>
            <div className="box">
                <div className="home-image-position">
                    <Image
                        src={bgimage}
                        objectFit="fill"
                        width={"800rem"}
                        height={"800rem"}
                        alt="bg-picj"
                    />
                </div>
            </div>
            <div className="img_title  animate__animated animate__backInUp">
                <h1>Kounsel</h1>
                <p className="slogan-position">{slogan}</p>
                <br />
            </div>
            <Link href="/singup">
                <button className="cta-button cta-position">Get Started</button>
            </Link>
        </>
    );
};

export default BgImage;
