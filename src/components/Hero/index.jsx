import React from "react";
import "./index.scss";
import Button from "../Button";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container" id="#top">
      <div className="overlay"></div>
      <div className="hero-content">
        <h2 data-aos="fade-right" data-aos-duration="2000">
          ELEVATE YOUR
          <Typewriter
            options={{
              strings: ["STYLE !!", "CONFIDENCE !!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p data-aos="fade-right" data-aos-duration="1000">
          at<strong> Zarah Elite Unisex Salon</strong>, where everyone's beauty
          shines. Step in and discover a world where style knows no boundaries.
        </p>
        <Link to="/services">
          <Button
            label="OUR SERVICES"
            animation="fade-left"
            animationDuration="1500"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
