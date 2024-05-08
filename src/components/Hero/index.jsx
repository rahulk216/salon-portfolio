import React from "react";
import "./index.scss";
import Button from "../Button";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = ({ page }) => {
  return (
    <div className={`hero-container ${page}`} id="#top">
      <div className="hero-slider">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          scrollbar={{ draggable: true }}>
          <SwiperSlide>
            <img src="https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/image-folder/hero.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery2.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery3.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery4.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery5.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery6.JPG" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="overlay"></div>
      <Header />
      {page === "home" ? (
        <div className="hero-content">
          <h2 data-aos="fade-right" data-aos-duration="2000">
            ELEVATE YOUR
            <Typewriter
              options={{
                strings: ["STYLE !!", "CONFIDENCE !!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            at
            <strong>
              {" "}
              Zarah Elite Professional Unisex Salon ( LIGHT UP YOUR BEAUTY )
            </strong>
            , where everyone's beauty shines. Step in and discover a world where
            style knows no boundaries.
          </p>
          <Link to="/services">
            <Button
              label="OUR SERVICES"
              animation="fade-left"
              animationDuration="1500"
            />
          </Link>
        </div>
      ) : (
        <div className="hero-content">
          <h2 data-aos="fade-right" data-aos-duration="2000">
            OUR
            <Typewriter
              options={{
                strings: ["SERVICES"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Indulge in luxury at<strong> Zarah Elite Salon</strong>, where
            expert stylists offer personalized services for a transformative
            experience. Experience the pinnacle of comfort and style at Zarah
            Elite Salon.
          </p>
          <Link to="/">
            <Button
              label="GO BACK"
              animation="fade-left"
              animationDuration="1500"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;
