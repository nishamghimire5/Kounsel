const CardData = (props) => {
  // let height = { "mix-height": "390px" };
  return (
    <div className="cards-list">
      <a href="#">
        <div className="card 1">
          <img
            className="card_image"
            src={props.imgLink}
            alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
          />
          <div className="card-title title-white">
            <h4>{props.textInPic}</h4>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardData;
