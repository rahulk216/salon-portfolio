import React from 'react';
import './footer.scss';
import Instagram from '../../assets/icons/Instagram';
import Facebook from '../../assets/icons/Facebook';
import Twitter from '../../assets/icons/Twitter';
import Phone from '../../assets/icons/Phone';
import Typewriter from 'typewriter-effect';
import { IMAGE_URL } from '../../constant';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='overlay'></div>
      <div className='container'>
        <div className='footer-view-row'>
          <div className='col'>
            <div className='logo'>
              <img src={`${IMAGE_URL}/images/logo2.png`} />
            </div>
          </div>
          <div className='footer-items-1'>
            <h3>
              <Typewriter
                options={{
                  strings: ['LIGHT UP', 'ENHANCE'],
                  autoStart: true,
                  loop: true,
                }}
              />{' '}
              YOUR BEAUTY
            </h3>
          </div>
          <div className='footer-items-2'>
            <div className='addres-container'>
              <p>
                "NOVA 𝐀𝐑𝐂𝐀𝐃𝐄”, KADRI TOL GATE, NANTOOR POST, MANGALORE 575001.
              </p>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.4175307708792!2d74.8600580750749!3d12.880851987426226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzUxLjEiTiA3NMKwNTEnNDUuNSJF!5e0!3m2!1sen!2sin!4v1709569498183!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0, marginTop: '15px' }}
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='email-container-web'>
              <a href='mailto:zarahelitesalon@gmail.com'>
                zarahelitesalon@gmail.com
              </a>
            </div>
          </div>
          <div className='col'>
            <div className='footer-items'></div>
          </div>
        </div>
        <div className='bottom-container'>
          <div className='email-container'>
            <a href='mailto:zarahelitesalon@gmail.com'>
              zarahelitesalon@gmail.com
            </a>
          </div>
          <div className='map-container'>
          <iframe
                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.4175307708792!2d74.8600580750749!3d12.880851987426226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzUxLjEiTiA3NMKwNTEnNDUuNSJF!5e0!3m2!1sen!2sin!4v1709569498183!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0, marginTop: '15px' }}
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
          </div>
          <div className='book-now'>
            <button>
              <a href='tel:+918243578799'>
                <Phone />
                {' BOOK NOW'}
              </a>
            </button>
          </div>
          <div className='social-container'>
            <a href='https://www.instagram.com/zarah_elite?igsh=MTk4azRud2VoajM1aQ=='>
              <Instagram />
            </a>

            <Facebook />
            <a href='https://twitter.com/ZarahElite'>
              <Twitter />
            </a>
          </div>
          <div className='copyright'>
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
