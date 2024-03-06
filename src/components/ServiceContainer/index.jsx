import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./index.scss";
import { Close } from "../../assets/svg/Close";

const ServiceContainer = () => {
  const [openModal, setOpenModal] = useState({
    gender: "male",
    open: false,
  });

  useEffect(() => {
    if (openModal.open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      return () => {
        document.body.style.overflow = "unset";
        document.body.style.position = "relative";
      };
    }
  }, [openModal]);
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="gender-box male">
        <div className="overlay">
          <p>
          Gentlemen, Get ready to elevate your style game! 
          </p>
          <button onClick={() => setOpenModal({ open: true, gender: "male" })}>
            FOR MEN
          </button>
        </div>
      </div>
      <div className="gender-box female">
        <div className="overlay">
          <p>
          Ladies, Unlock your inner goddess with Zarah Elite! 
          </p>
          <button
            onClick={() => setOpenModal({ open: true, gender: "female" })}
          >
            FOR WOMEN
          </button>
        </div>
      </div>
      <Modal
        isOpen={openModal.open}
        onRequestClose={() => setOpenModal({ open: false })}
      >
        {openModal.gender === "male" ? (
          <div className="modal men">
            <div className="modal-heading">
              <h1>Men's Services:</h1>
              <span
                onClick={() => setOpenModal({ open: false, gender: "male" })}
              >
                <Close />
              </span>
            </div>
            <p>
            It's time to experience the ultimate grooming experience at Zarah Elite! Our expert stylists are here to help you achieve the look you've always wanted.
            </p>
            <ul className="services-list">
              <li>From classic cuts to modern fades, we've got you covered.</li>
              <li>Beard trims and grooming to keep you looking sharp.</li>
              <li>Relaxing hot towel shaves for the ultimate pampering.</li>
              <li>Professional styling for that important meeting or special occasion.</li>
            </ul>
            <p>Book your appointment now and discover why Zarah Elite is the go-to destination for discerning gentlemen who demand the best. Don't settle for anything less than perfection!</p>
            <p>
              For more information on men's services and pricing kindly download
              the PDF below.
            </p>
            <button>DOWNLOAD PDF</button>
          </div>
        ) : (
          <div className="modal women">
            <div className="modal-heading">
              <h1>Women's Services:</h1>
              <span
                onClick={() => setOpenModal({ open: false, gender: "male" })}
              >
                <Close />
              </span>
            </div>
            <p>
            It's time to indulge in some well-deserved pampering at Zarah Elite! Our team of skilled professionals is dedicated to helping you look and feel your absolute best.
            </p>
            <ul className="services-list">
              <li>Treat yourself to a fabulous new hairstyle that will turn heads wherever you go.</li>
              <li>Pamper your hands and feet with our luxurious manicure and pedicure services.</li>
              <li>Enhance your natural beauty with our expert makeup application.</li>
              <li>Relax and rejuvenate with our selection of spa treatments, including massages and facials.</li>
            </ul>
            <p>Experience the ultimate in luxury and comfort at Zarah Elite. Whether you're in need of a quick touch-up or a complete transformation, we've got you covered!</p>
            <p>
              For more information on women's services and pricing kindly
              download the PDF below.
            </p>
            <button>DOWNLOAD PDF</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ServiceContainer;
