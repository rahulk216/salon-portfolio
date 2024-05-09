import React from "react";
import Whatsapp from "../assets/svg/Whatsapp";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop/index";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import MessageOwner from "../components/MessageOwner";
import Marquee from "react-fast-marquee";
import "./index.scss";

const Layout = () => {
  return (
    <>
      {/* <ComingSoon /> */}
      <a target="_blank" rel="noreferrer" href="https://wa.me/+919019725884">
        <Whatsapp />
      </a>
      <ScrollToTop />
      <Hero page="home" />
      <About />
      {/* <Offer /> */}
      <Gallery />
      <Testimonials />
      <MessageOwner />
      <div className="zarah-marquee">
        <Marquee>
          <p>ZARAH ELITE PROFESSIONAL UNISEX SALON</p>
        </Marquee>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
