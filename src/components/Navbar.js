import "../styles.css";
import smallLogo from "../logos/small-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  const showingMobileMenuHandler = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="navContainer">
      <img className="navLogo" src={smallLogo} />
      <a
        className="menuBtn"
        href="#"
        onClick={() => {
          showingMobileMenuHandler();
        }}
      >
        <FontAwesomeIcon icon={faAlignJustify} color="white" />
      </a>

      <nav>
        <ul className={isShowing ? "" : "navUl"}>
          <li>
            <a href="#">OUR PROJECTS</a>
          </li>
          <li>
            <a href="#">WHAT WE DO</a>
          </li>
          <li>
            <a href="#">CLIENTS</a>
          </li>
          <li>
            <a href="#">JOBS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">FRANÇAIS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
