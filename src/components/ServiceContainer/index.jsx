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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, rem.
          </p>
          <button onClick={() => setOpenModal({ open: true, gender: "male" })}>
            FOR MEN
          </button>
        </div>
      </div>
      <div className="gender-box female">
        <div className="overlay">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, rem.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              aliquam dolorem vel reiciendis! Iste quos eveniet placeat nulla
              ullam perspiciatis officiis ratione, exercitationem at possimus
              sapiente. Obcaecati sunt officiis ea.
            </p>
            <ul className="services-list">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              aliquam dolorem vel reiciendis! Iste quos eveniet placeat nulla
              ullam perspiciatis officiis ratione, exercitationem at possimus
              sapiente. Obcaecati sunt officiis ea.
            </p>
            <ul className="services-list">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
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
