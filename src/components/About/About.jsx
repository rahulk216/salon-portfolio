import React from "react";
import "./about.scss";
import Button from "../Button";
import Image1 from "../../assets/images/photo3.jpg";
import Image2 from "../../assets/images/photo1.jpg";
import Image3 from "../../assets/images/photo2.jpg";
import Image4 from "../../assets/images/photo4.jpg";

function About() {

  const handleButtonClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  } 

  return (
    <div className="about-container">
      <div className="text-container">
        <h1 className="title">About Us</h1>
        <p>
        At Zarah Elite, we believe that beauty is more than just skin deep. We are dedicated to providing an unparalleled salon experience where every client feels valued, beautiful, and empowered.
        </p>
        <p>
        Come experience the difference. Schedule your appointment today and let us pamper you in our luxurious and welcoming environment. 
        </p>
        <Button
          handleClick={handleButtonClick}
          className="about-btn"
          label="CONTACT US"
          animation="fade-left"
          animationDuration="1500"
        />
      </div>
      <div className="image-container">
        <div className="image-1">
          <div className="overlay-1"></div>
          <img src={Image4} alt="photo" />
        </div>
        <div className="image-2">
          <div className="overlay-2"></div>
          <img src={Image2} alt="photo" />
        </div>
        <div className="image-3">
          <div className="overlay-3"></div>
          <img src={Image3} alt="photo" />
        </div>
        <div className="image-4">
          <div className="overlay-4"></div>
          <img src={Image4} alt="photo" />
        </div>
      </div>
    </div>
  );
}

export default About;
