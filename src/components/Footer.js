import facebookIcon from "../socialIcons/facebook-ic.png";
import instagramIcon from "../socialIcons/instagram-ic.png";
import linkedinIcon from "../socialIcons/linkedin-ic.png";
import pinterestIcon from "../socialIcons/pinterest-ic.png";
import youtubeIcon from "../socialIcons/youtube-ic.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contact">
        <h3>CONTACT US</h3>
        <p>we don't bite</p>
      </div>
      <div className="address">
        <p>
          8 Hafes Haim St. <br></br> Tel Aviv, Israel <br></br> 972 (3) 6960556
        </p>
        <button>MAIL US</button>
      </div>
      <div className="follow">
        <h3>FOLLOW US</h3>
        <p>it doesn't hurt... much</p>
      </div>
      <div className="socialMedia">
        <ul>
          <li>
            <img className="facebookIcon" src={facebookIcon} />
            <a href="#"></a>
          </li>
          <li>
            <img className="linkedinIcon" src={linkedinIcon} />
          </li>
          <li>
            <img className="youtubeIcon" src={youtubeIcon} />
          </li>
          <li>
            <img className="pinterestIcon" src={pinterestIcon} />
          </li>
          <li>
            <img className="instagramIcon" src={instagramIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
