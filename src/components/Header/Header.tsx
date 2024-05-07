import React from "react";
import "./index.scss";
import Hamburger from "../../assets/svg/hamburger";
import { IMAGE_URL } from "../../constant";

const Header = () => {
  return (
    <div className="header-container">
      <img src={`${IMAGE_URL}/images/logo2.png`} />
      <Hamburger />
    </div>
  );
};

export default Header;
