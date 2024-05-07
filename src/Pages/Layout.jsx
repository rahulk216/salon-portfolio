import React from "react";
import Whatsapp from "../assets/svg/Whatsapp";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop/index";
import Testimonials from "../components/Testimonials";

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
