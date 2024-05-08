import React from "react";
import "./index.scss";
import Hamburger from "../../assets/svg/hamburger";
import { IMAGE_URL } from "../../constant";

const Header = () => {
  return (
    <div className="header-container">
      <img src={`${IMAGE_URL}/images/logo2.png`} />
      <div className="web-view-links">
        <ul>
          <li>About Us</li>
          <li>Gallery</li>
          <li>Testimonial</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="mobile-view-links">
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
