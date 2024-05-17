import React, { useState } from "react";
import "./index.scss";
import Hamburger from "../../assets/svg/hamburger";
import { IMAGE_URL } from "../../constant";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

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
        <span onClick={() => setShowHeader(!showHeader)}>
          <Hamburger />
        </span>
      </div>
      {showHeader && (
        <div className="mobile-sidebar">
          <ul>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Testimonial</li>
            <li>Services</li>
            <li>Contact US</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
