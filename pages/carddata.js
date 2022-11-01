const CardData = (props) => {
<<<<<<< HEAD
  // let height = { "mix-height": "390px" };
  return (
    <div className="slide-container swiper">
      <div className="slide-content">
        <div class="card-wrapper swiper-wrapper">
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img src={props.imgLink} alt="" className="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">{props.textInPic}</h2>
              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
=======
    // let height = { "mix-height": "390px" };
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main"><div className="card text-white card-has-bg click-col" >
            <a href="#">
                <img className="card-img " src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
                <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                        <h4 className="card-title mt-0"><div className="card-img">{props.textInPic}</div></h4>
                    </div>
                </div>
            </a>
        </div></div>
    )
}
>>>>>>> 48bb8b49a9ab185a876fa5baa2e2ce03102c6a77

export default CardData;
