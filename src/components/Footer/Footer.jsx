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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, marginTop: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
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
