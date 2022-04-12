import "../styles.css";
const SliderOnePice = (props) => {
  return (
    <div>
      <img src={props.backgroundImg} className="backGroundImage" />
      <div className="sliderTextContainer">
        <h2 className="smallSliderHeader">{props.smallSliderHeader}</h2>
        <h1 className="largeSliderHeaderPart1">
          {props.largeSliderHeaderPart1}
        </h1>
        <h1 className="largeSliderHeaderPart2">
          {props.largeSliderHeaderPart2}
        </h1>
        <p className="sliderP">{props.sliderP}</p>
        <button className="sliderBtn">{props.sliderBtn}</button>
      </div>
    </div>
  );
};

export default SliderOnePice;
