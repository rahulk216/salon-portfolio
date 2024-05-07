import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Offer from "../components/Offer/Offer";
import ScrollToTop from "../components/ScrollToTop/index";
import ComingSoon from "../components/ComingSoon";
import Whatsapp from "../assets/svg/Whatsapp";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      {/* <ComingSoon /> */}
      <a target="_blank" rel="noreferrer" href="https://wa.me/+917829780587">
        <Whatsapp />
      </a>
      <ScrollToTop />
      <Hero page="home" />
      <About />
      {/* <Offer /> */}
      <Testimonials />
      <Footer />
    </>
  );
};

export default Layout;
