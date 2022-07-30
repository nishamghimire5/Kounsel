import image from './Images/bgimage1.jpg';
import './HomePage.css'
import kimage from './Images/kounsel-k.png'

const HomePage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            <div className="box ">
                <img className="img-responsive img-fluid bgHImg" src={image} alt="bg-pic" />
                <div className="img-title">
                    <div className="dropdown font-sans tracking-wider">
                        <h2>Kounsel</h2>
                        <p>{slogan}</p>
                        <button className="btn getStartedBtn btn-outline-dark " type="button" >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

        <div class="site-intro">
            <div class="intro-kounsel">
                <div class="text-area">
                    <h1>What is Kounsel?</h1>
                    <p>Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University.</p>
                </div>
                <div class="img-area">
                    <img className="img-responsive img-fluid bgHImg" src={kimage} alt="bg-pic" />
                </div>
            </div>
            <div class="intro-counselor">
                <div class="img-area">
                    <img className="img-responsive img-fluid bgHImg" src={kimage} alt="bg-pic" />
                </div>
                <div class="text-area">
                    <h1>Meet the counselor</h1>
                 <p>Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. </p>
                </div>
            </div>
            <div class="intro-anonymous">
                <div class="text-area">
                    <h1>Your conversations are anonymous</h1>
                    <p>Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. Kounsel is the unofficial counseling service of Kathmandu University. </p>
                </div>
                <div class="img-area">
                    <img className="img-responsive img-fluid bgHImg" src={kimage} alt="bg-pic" />
                </div>
            </div>
        </div>
        </>
    );
}
export default HomePage;