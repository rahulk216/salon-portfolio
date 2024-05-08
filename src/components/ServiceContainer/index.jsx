import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./index.scss";
import { Close } from "../../assets/svg/Close";
import ZARAH_ELITE_ladies from "/documents/ZARAH_ELITE_Ladies.pdf";
import ZARAH_ELITE_mens from "/documents/ZARAH_ELITE_mens.pdf";

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
      <p className="para">
        Welcome to Zarah Elite Professional Unisex Salon, where beauty meets
        excellence. Our salon offers a wide range of services tailored to
        enhance your natural beauty and elevate your style. From hair to nails,
        skin, makeup, and more, our expert stylists and technicians are here to
        pamper you from head to toe. At Zarah Elite Professional Unisex Salon,
        we believe in using only the highest quality products and techniques to
        ensure that you leave feeling confident and beautiful. Our team is
        dedicated to providing you with a luxurious salon experience that
        exceeds your expectations. Schedule your appointment today and let us
        help you discover your beauty potential.
      </p>
      <div>
        {" "}
        <div className="gender-box male">
          <div className="overlay">
            <p>
              Indulge in classic grooming services tailored for the modern
              gentleman at Zarah Elite Professional Unisex Salon. Experience
              precision haircuts, beard trims, and skincare treatments designed
              to elevate your style. Step into sophistication and redefine your
              grooming routine with us.{" "}
            </p>
            <button
              onClick={() => setOpenModal({ open: true, gender: "male" })}>
              FOR MEN
            </button>
          </div>
        </div>
        <div className="gender-box female">
          <div className="overlay">
            <p>
              Pamper yourself with our luxurious range of hair, skin, and nail
              services tailored for women at Zarah Elite Professional Unisex
              Salon. Let our expert stylists and technicians enhance your
              natural beauty and elevate your style. Indulge in a day of
              relaxation and rejuvenation, because you deserve to look and feel
              your best.
            </p>
            <button
              onClick={() => setOpenModal({ open: true, gender: "female" })}>
              FOR WOMEN
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={openModal.open}
        onRequestClose={() => setOpenModal({ open: false })}>
        {openModal.gender === "male" ? (
          <div className="modal men">
            <div className="modal-heading">
              <h1>Men's Services:</h1>
              <span
                onClick={() => setOpenModal({ open: false, gender: "male" })}>
                <Close />
              </span>
            </div>
            <p>
              It's time to experience the ultimate grooming experience at Zarah
              Elite! Our expert stylists are here to help you achieve the look
              you've always wanted.
            </p>
            <ul className="services-list">
              <li>From classic cuts to modern fades, we've got you covered.</li>
              <li>Beard trims and grooming to keep you looking sharp.</li>
              <li>Relaxing hot towel shaves for the ultimate pampering.</li>
              <li>
                Professional styling for that important meeting or special
                occasion.
              </li>
            </ul>

            <p>
              For more information on men's services and pricing kindly download
              the PDF below.
            </p>
            <button>
              <a href={ZARAH_ELITE_mens} download="ZARAH ELITE Mens">
                DOWNLOAD PDF
              </a>
            </button>
          </div>
        ) : (
          <div className="modal women">
            <div className="modal-heading">
              <h1>Women's Services:</h1>
              <span
                onClick={() => setOpenModal({ open: false, gender: "male" })}>
                <Close />
              </span>
            </div>
            <p>
              It's time to indulge in some well-deserved pampering at Zarah
              Elite! Our team of skilled professionals is dedicated to helping
              you look and feel your absolute best.
            </p>
            <ul className="services-list">
              <li>
                Treat yourself to a fabulous new hairstyle that will turn heads
                wherever you go.
              </li>
              <li>
                Pamper your hands and feet with our luxurious manicure and
                pedicure services.
              </li>
              <li>
                Enhance your natural beauty with our expert makeup application.
              </li>
              <li>
                Relax and rejuvenate with our selection of spa treatments,
                including massages and facials.
              </li>
            </ul>

            <p>
              For more information on women's services and pricing kindly
              download the PDF below.
            </p>
            <button>
              <a href={ZARAH_ELITE_ladies} download="ZARAH ELITE Ladies">
                DOWNLOAD PDF
              </a>
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ServiceContainer;
