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
          <h3>Our special hand made cream</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aut
            labore ab ducimus culpa. Aperiam!
          </p>
          <div className="more-info">
            <h2>45$</h2>
            <Button 
            label={'more >'}
            />
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
