import React from "react";
import "./footer.scss";
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";

function Footer() {
  return (
    <div className="footer-container">
      <div className="overlay"></div>
      <div data-aos="fade-right" data-aos-duration="1000" className="container">
        <div className="row">
          <div className="col">
            <div className="logo">Zarah Unisex Salon</div>
          </div>
          <div className="col">
            <div className="footer-items">
              <div className="title">Contact Us</div>
              <ul>
                <li>Hoigebail ashoknanger mangalore</li>
                <li>zarah@gmai.com</li>
                <li>+91 99887766</li>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.4175307708792!2d74.8600580750749!3d12.880851987426226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzUxLjEiTiA3NMKwNTEnNDUuNSJF!5e0!3m2!1sen!2sin!4v1709569498183!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, marginTop: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-items">
              <div className="title">Our Service</div>
              <ul>
                <li>Hair Cutting</li>
                <li>Hair Styling</li>
                <li>Detan and bleach</li>
                <li>Facials</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-items">
              <div className="title">Our Products</div>
              <ul>
                <li>Shampoo</li>
                <li>Conditioner</li>
                <li>Styling Products</li>
                <li>Brushes and combs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="social-container">
            <Instagram />
            <Facebook />
          </div>
          <div className="copyright">
            <p>
              &copy; 2024 <span>Zarah Elite Unisex Salon.</span> All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
