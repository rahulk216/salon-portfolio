import React from "react";
import "./footer.scss";
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";

function Footer() {
  return (
    <div className="footer-container">
      <div className="overlay"></div>
      <div  data-aos="fade-right" data-aos-duration="1000"  className="container">
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
        <div className='bottom-container'>
          <div className="social-container">
            <Instagram />
            <Facebook />
          </div>
          <div className="copyright">
          <p>&copy; 2024 <span>Zarah Elite Unisex Salon.</span> All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
