import React, { useState } from "react";
import Modal from "react-modal";
import "./index.scss";

const ServiceContainer = () => {
  const [openModal, setOpenModal] = useState({
    gender: "male",
    open: false,
  });
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
            <h1>Men's Services</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              aliquam dolorem vel reiciendis! Iste quos eveniet placeat nulla
              ullam perspiciatis officiis ratione, exercitationem at possimus
              sapiente. Obcaecati sunt officiis ea.
            </p>
            <ul>
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
            <h1>Women's Services</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              aliquam dolorem vel reiciendis! Iste quos eveniet placeat nulla
              ullam perspiciatis officiis ratione, exercitationem at possimus
              sapiente. Obcaecati sunt officiis ea.
            </p>
            <ul>
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
