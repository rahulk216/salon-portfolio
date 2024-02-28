import React from "react";
import "./index.scss";
import Button from "../Button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="hero-content">
        <h2 data-aos="fade-right" data-aos-duration="2000">
          Elevate Your
          <Typewriter
            options={{
              strings: ["Style !!", "Confidence !!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p data-aos="fade-right" data-aos-duration="1000">
          at<strong> Zarah Elite Unisex Salon</strong>, where everyone's beauty
          shines. Step in and discover a world where style knows no boundaries.
        </p>
        <Button
          label="OUR SERVICES"
          animation="fade-left"
          animationDuration="1500"
        />
      </div>
    </div>
  );
};

export default Hero;
