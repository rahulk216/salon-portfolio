import React from "react";
import "./index.scss";

import logo from "../../assets/images/logo2.png";
import Hamburger from "../../assets/svg/hamburger";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} />
      <Hamburger />
    </div>
  );
};

export default Header;
