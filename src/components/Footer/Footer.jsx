import React from "react";
import "./footer.scss";
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import Twitter from "../../assets/icons/Twitter";
import Phone from "../../assets/icons/Phone";
import { IMAGE_URL } from "../../constant";

function Footer() {
  return (
    <div className="footer-container" id="contact-us">
      <div className="overlay"></div>
      <div data-aos="fade-right" data-aos-duration="1000" className="container">
        <div className="mobile-view-row">
          <div className="col">
            <div className="logo">
              <img src={`${IMAGE_URL}/images/logo2.png`} />
            </div>
          </div>
          <div className="col">
            <div className="footer-items">
              <div className="title">Contact Us</div>
              <ul>
                <li>Nova Arcade, Kadri tol Gate, Nantoor Post Mangalore</li>
                <li>zarahelite03@gmail.com</li>
                <li>
                  <a href="tel:+918243578799">+91 8243578799</a>
                </li>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.4175307708792!2d74.8600580750749!3d12.880851987426226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzUxLjEiTiA3NMKwNTEnNDUuNSJF!5e0!3m2!1sen!2sin!4v1709569498183!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, marginTop: "15px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
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
              <div className="title">Quick Links</div>
              <ul>
                <li>About</li>
                <li>Testimonials</li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="web-footer-row">
          <div className="footer-content">
            <div className="col">
              <div className="footer-items">
                <div className="title">Contact Us</div>
                <ul>
                  <li>Hoigebail ashoknanger, mangalore</li>
                  <li>zarahelite03@gmail.com</li>
                  <li>
                    <a href="tel:+918243578799">+91 8243578799</a>
                  </li>
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
                <div className="title">Quick Links</div>
                <ul>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="map-container">
            <div className="footer-items">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.4175307708792!2d74.8600580750749!3d12.880851987426226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzUxLjEiTiA3NMKwNTEnNDUuNSJF!5e0!3m2!1sen!2sin!4v1709569498183!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, marginTop: "15px" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="social-container">
            <a href="https://www.instagram.com/zarah_elite?igsh=MTk4azRud2VoajM1aQ==">
              <Instagram />
            </a>

            <Facebook />
            <a href="https://twitter.com/ZarahElite">
              <Twitter />
            </a>

            <a href="tel:+918243578799">
              {" "}
              <Phone />
            </a>
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
