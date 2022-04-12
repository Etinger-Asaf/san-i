import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SliderOnePice from "../reusable/SliderOnePice";
import cicsoImage from "../slidingImages/cisco.jpg";
import allotImage from "../slidingImages/allot.jpg";
import calImage from "../slidingImages/main1.jpg";
import melisronImage from "../slidingImages/melisron.jpg";
import xmImage from "../slidingImages/xm.jpg";
import emcImage from "../slidingImages/emc.jpg";
const SlidingShow = () => {
  return (
    <Carousel
      className="slider"
      autoPlay="true"
      infiniteLoop="true"
      showThumbs={false}
    >
      <SliderOnePice
        backgroundImg={melisronImage}
        smallSliderHeader={"Melisron"}
        largeSliderHeaderPart1={"RESPONSIVE"}
        largeSliderHeaderPart2={"WEBSITE"}
        sliderP={"Fully custom responsive website"}
        sliderBtn={"VIEW CASE STUDY"}
      />
      <SliderOnePice
        backgroundImg={cicsoImage}
        smallSliderHeader={"Cisco"}
        largeSliderHeaderPart1={"HTML5"}
        largeSliderHeaderPart2={"PRESENTATION"}
        sliderP={"MWC Barcelona 2019 interactive presentation"}
        sliderBtn={"VIEW CASE STUDY"}
      />
      <SliderOnePice
        backgroundImg={allotImage}
        smallSliderHeader={"Allot"}
        largeSliderHeaderPart1={"RESPONSIVE"}
        largeSliderHeaderPart2={"WEBSITE"}
        sliderP={"Multi-platform responsive website"}
        sliderBtn={"VIEW CASE STUDY"}
      />
      <SliderOnePice
        backgroundImg={calImage}
        smallSliderHeader={"Cal"}
        largeSliderHeaderPart1={"DIGITAL"}
        largeSliderHeaderPart2={"WALLET"}
        sliderP={"Multi-platform mobile UX based on HTML 5 abilities"}
        sliderBtn={"VIEW CASE STUDY"}
      />
      <SliderOnePice
        backgroundImg={xmImage}
        smallSliderHeader={"Xm"}
        largeSliderHeaderPart1={"RESPONSIVE"}
        largeSliderHeaderPart2={"WEBSITE"}
        sliderP={"A unique responsive marketing website"}
        sliderBtn={"VIEW CASE STUDY"}
      />
      <SliderOnePice
        backgroundImg={emcImage}
        smallSliderHeader={"Emc"}
        largeSliderHeaderPart1={"IPAD"}
        largeSliderHeaderPart2={"APPLICATION"}
        sliderP={"Custom made application for ipad product at EMC"}
        sliderBtn={"VIEW CASE STUDY"}
      />
    </Carousel>
  );
};

export default SlidingShow;
