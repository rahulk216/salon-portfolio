import React from "react";
import offerImage from '../../assets/images/offer-image.jpg'
import './offer.scss'
import Button from "../Button";

function Offer() {
  return (
    <div className="offer-container">
      <div className="container">
        <div className="text-container">
          <h1 className="title">Offer-Promotion</h1>
          <h3>First-Time Head Wash Special</h3>
          <p>
          "Debut Delight: Elevate Your Scalp Game with Our First-Time Head Wash Promotion!"
          </p>
          <div className="more-info">
            <h2>45 &#8377;</h2>
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
