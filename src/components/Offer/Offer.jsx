import React from "react";
import "./offer.scss";

function Offer() {
  return (
    <div className="offer-container">
      <div className="container">
        <div className="text-container">
          <h1 data-aos="fade-right" data-aos-duration="1000" className="title">
            Offer-Promotion
          </h1>
          <h3 data-aos="fade-right" data-aos-duration="1300">
            First-Time hair cut offer
          </h3>
          <p data-aos="fade-right" data-aos-duration="1600">
            Get a haircut and hairwash for just...
          </p>
          <div className="more-info">
            <h2 data-aos="fade-right" data-aos-duration="1900">
              &#8377; 400
            </h2>
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
