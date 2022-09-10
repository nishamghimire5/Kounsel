const CardData = (props) => {
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

export default CardData;
