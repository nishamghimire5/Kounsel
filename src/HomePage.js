import image from './Images/bgimage1.jpg';
import './HomePage.css'
import kimage from './Images/kounsel-k.png'
import slideImage1 from './Images/session.jpeg'
import slideImage2 from './Images/stuffd.jpeg'
import slideImage3 from './Images/123.jpeg'

const HomePage = () => {
    let slogan = "A Safe Space"
    return (
        <>
            {/* <div className="box ">
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
            </div> */}
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt={image} />
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt= {image}/>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt= {image}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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