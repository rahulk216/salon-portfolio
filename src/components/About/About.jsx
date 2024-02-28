import React from "react";
import "./about.scss";
import Button from "../Button";

function About() {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1 className="title">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde
          sequi et ducimus eveniet iure optio consequuntur pariatur, odio
          officiis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, eum!
        </p>
        <Button
          className="about-btn"
          label="CONTACT US"
          animation="fade-left"
          animationDuration="1500"
        />
      </div>
      <div className="image-container">
        <div className="image-1">
          <div className="overlay-1"></div>
        <img src="src/assets/images/photo3.jpg" alt="photo" />
        </div>
        <div className="image-2">
        <div className="overlay-2"></div>
        <img src="src/assets/images/photo1.jpg" alt="photo" />
        </div>
       <div className="image-3">
        <div className="overlay-3"></div>
       <img src="src/assets/images/photo2.jpg" alt="photo" />
       </div>
       <div className="image-4">
       <div className="overlay-4"></div>
       <img src="src/assets/images/photo4.jpg" alt="photo" />
       </div>
      </div>
    </div>
  );
}

export default About;
