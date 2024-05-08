import React from "react";
import "./index.scss";
import Hamburger from "../../assets/svg/hamburger";
import { IMAGE_URL } from "../../constant";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src={`${IMAGE_URL}/images/logo2.png`} />
      <div className="web-view-links">
        <ul>
          <AnchorLink href="#about-us">
            <li>About Us</li>
          </AnchorLink>
          <AnchorLink href="#gallery">
            <li>Gallery</li>
          </AnchorLink>
          <AnchorLink href="#testimonials">
            <li>Testimonial</li>
          </AnchorLink>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <AnchorLink href="#contact-us">
            <li>Contact Us</li>
          </AnchorLink>
        </ul>
      </div>
      <div className="mobile-view-links">
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
