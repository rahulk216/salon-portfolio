import React from "react";
import "./about.scss";
import Button from "../Button";
import { IMAGE_URL } from "../../constant";

function About() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="about-container">
      <div className="text-container">
        <h1 className="title">About Us</h1>
        <p>
          At Zarah Elite, we believe that beauty is more than just skin deep. We
          are dedicated to providing an unparalleled salon experience where
          every client feels valued, beautiful, and empowered.
        </p>
        <p>
          Come experience the difference. Schedule your appointment today and
          let us pamper you in our luxurious and welcoming environment.
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
          <img src={`${IMAGE_URL}/gallery-images/gallery10.JPG`} alt="photo" />
        </div>
        <div className="image-2">
          <div className="overlay-2"></div>
          <img src={`${IMAGE_URL}/image-folder/about1.jpg`} alt="photo" />
        </div>
        <div className="image-3">
          <div className="overlay-3"></div>
          <img src={`${IMAGE_URL}/image-folder/about2.jpg`} alt="photo" />
        </div>
        <div className="image-4">
          <div className="overlay-4"></div>
          <img src={`${IMAGE_URL}/image-folder/about4.jpg`} alt="photo" />
        </div>
      </div>
    </div>
  );
}

export default About;
