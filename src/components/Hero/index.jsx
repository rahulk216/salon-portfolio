import React from "react";
import "./index.scss";
import Button from "../Button";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import videoLoop from "../../assets/video.mp4";

const Hero = ({ page }) => {
  return (
    <div className="hero-container" id="#top">
      <div className="overlay"></div>
      {page === "home" ? (
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
            at<strong> Zarah Elite Unisex Salon</strong>, where everyone's
            beauty shines. Step in and discover a world where style knows no
            boundaries.
          </p>
          <Link to="/services">
            <Button
              label="OUR SERVICES"
              animation="fade-left"
              animationDuration="1500"
            />
          </Link>
        </div>
      ) : (
        <div className="hero-content">
          <h2 data-aos="fade-right" data-aos-duration="2000">
            OUR
            <Typewriter
              options={{
                strings: ["SERVICES"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Indulge in luxury at<strong> Zarah Elite Salon</strong>, where
            expert stylists offer personalized services for a transformative
            experience. Experience the pinnacle of comfort and style at Zarah
            Elite Salon.
          </p>
          <Link to="/">
            <Button
              label="GO BACK"
              animation="fade-left"
              animationDuration="1500"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;
