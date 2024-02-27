import React from "react";
import "./index.scss";

const Button = ({ label, animation, animationDuration }) => {
  return (
    <>
      <button data-aos-duration={animationDuration} data-aos={animation}>
        {label}
      </button>
    </>
  );
};

export default Button;
