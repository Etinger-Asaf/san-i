import ".././styles.css";

const CarouselOnePice = (props) => {
  return (
    <div className="carouselFigure">
      <div className="overlayContainer">
        <img
          className="carouselBackgroundImage"
          src={`${props.imageLocation}`}
        ></img>
        <div className="overlay"></div>
        <a className="carouselBtn" href="#">
          LAUNCH
        </a>
      </div>
      <p className="carouselText">
        {props.companyName}
        <span> {props.appType}</span>
        <img src={props.icon} className="icon" />
      </p>
    </div>
  );
};

export default CarouselOnePice;
