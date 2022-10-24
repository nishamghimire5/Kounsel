const CardData = (props) => {
  // let height = { "mix-height": "390px" };
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4 main"><div className="card text-white card-has-bg click-col" >
        <div className="rounded-lg">
          <img className="card-img " src={props.imgLink} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <h4 className="card-title mt-0"><div className="card-img text-center">{props.textInPic}</div></h4>
            </div>
          </div>
        </div>
      </div></div>

      <div class="card-image">
        <img src={props.imgLink} alt="" className="card-img" />
      </div>

      <div class="card-content">
        <h2 class="name">{props.textInPic}</h2>
        <button class="button">View More</button>
      </div>
      <div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
        </div>
      </div>
    </>
  );
};

export default CardData;
