import ".././styles.css";
import CarouselOnePice from "../reusable/CarouselOnePice";

import LupaPic from "../images/lupa-tumb.jpg";
import atrium from "../images/atrium.jpg";
import cisco from "../images/cisco.jpg";
import melisron from "../images/melisron.jpg";
import tomia from "../images/tumia_a-1.jpeg";
import ciscoProject from "../images/project_cisco.png";
import lupaProject from "../images/project_lupa.jpg";
import alonyProject from "../images/project_alony.jpg";
// icons
import website from "../typeIcons/pr_website_ic.png";
import mobile from "../typeIcons/pr_mobile_ic.png";
import presentation from "../typeIcons/pr_presentation_ic.png";
import eye from "../typeIcons/pr_eye_ic.png";
import branding from "../typeIcons/pr_branding_ic.png";

const Carousel = () => {
  return (
    <div className="carouselContainer">
      <CarouselOnePice
        companyName={"LUPA"}
        appType={"Website"}
        imageLocation={LupaPic}
        icon={website}
      />
      <CarouselOnePice
        companyName={"ATRIUM"}
        appType={"Website"}
        imageLocation={atrium}
        icon={website}
      />
      <CarouselOnePice
        companyName={"MELISRON"}
        appType={"Website"}
        imageLocation={melisron}
        icon={website}
      />
      <CarouselOnePice
        companyName={"CISCO"}
        appType={"HTML5 Presentation"}
        imageLocation={cisco}
        icon={presentation}
      />
      <CarouselOnePice
        companyName={"TOMIA"}
        appType={"Website"}
        imageLocation={tomia}
        icon={website}
      />
      <CarouselOnePice
        companyName={"CISCO"}
        appType={"Website"}
        imageLocation={ciscoProject}
        icon={eye}
      />
      <CarouselOnePice
        companyName={"LUPA"}
        appType={"Mobile App"}
        imageLocation={lupaProject}
        icon={mobile}
      />
      <CarouselOnePice
        companyName={"ALONY HETZ"}
        appType={"HTML5 Presentation"}
        imageLocation={alonyProject}
        icon={presentation}
      />
    </div>
  );
};

export default Carousel;
