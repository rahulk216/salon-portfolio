import React from "react";
import "./index.scss";

const Button = ({ label, animation, animationDuration, handleClick }) => {

  const handleButtonClick = () => {
   handleClick()
  }
  return (
    <>
      <button onClick={handleButtonClick} data-aos-duration={animationDuration} data-aos={animation}>
        {label}
      </button>
    </>
  );
};

export default Button;
