import React from "react";
import offerImage from "../../assets/images/offer-image.jpeg";
import "./offer.scss";
import Button from "../Button";

function Offer() {
  return (
    <div className="offer-container">
      <div className="container">
        <div className="text-container">
          <h1 className="title">Offer-Promotion</h1>
          <h3>First-Time hair cut offer</h3>
          <p>Get a haircut and hairwash for just...</p>
          <div className="more-info">
            <h2>&#8377; 400</h2>
            {/* <Button 
            label={'more >'}
            /> */}
          </div>
        </div>
        <div className="image-container">
          <div className="offer-overlay"></div>
          <img src={offerImage} alt="offer-image" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
