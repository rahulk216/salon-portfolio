import React from "react";
import "./index.scss";
import owner from "../../assets/zara.jpg";

const MessageOwner = () => {
  return (
    <section>
      <div className="owner-container">
        <div className="overlay"></div>
        <div className="owner-text">
          <h1>A Message from Our Managing Director</h1>
          <p>
            <p>Dear Valued Customers,</p>
            <p>
              I am thrilled to welcome you to our salon, where we strive to
              exceed your expectations with every visit. Our team is dedicated
              to providing you with the highest level of service and ensuring
              that you leave feeling pampered and rejuvenated.
            </p>
            <p>
              At Zarah Elite, we understand the importance of self-care and the
              role it plays in enhancing your overall well-being. Our commitment
              to excellence drives us to continually innovate and bring you the
              latest trends and techniques in the beauty industry.
            </p>
            <p>
              As we navigate these challenging times, rest assured that your
              safety and comfort are our top priorities. We have implemented
              stringent hygiene protocols and safety measures to create a serene
              and clean environment for your relaxation.
            </p>
            <p>
              I would like to express my gratitude for your continued support
              and trust in us. Your satisfaction is our motivation, and we look
              forward to serving you and helping you feel your best.
            </p>
            <p>
              Thank you for choosing Zarah Elite. Sit back, relax, and let us
              pamper you!
            </p>
            <p>Warm regards,</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>
                <strong>Mohammed Shanakath Ali</strong>
              </span>
              <span>
                <strong>Managing Director</strong>
              </span>
              <span>
                <strong>Zarah Elite Professional Unisex Salon </strong>
              </span>
            </div>
          </p>
        </div>
        <div className="owner-img">
          <img src={owner} alt="owner" />
        </div>
      </div>
    </section>
  );
};

export default MessageOwner;
