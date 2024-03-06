import React from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import ServiceContainer from "../components/ServiceContainer/index";
import ScrollToTop from "../components/ScrollToTop/index";
import ComingSoon from "../components/ComingSoon";
import Whatsapp from "../assets/svg/Whatsapp";

const Services = () => {
  return (
    <>
      <ComingSoon />
      <a target="_blank" rel="noreferrer" href="https://wa.me/+917829780587">
        <Whatsapp />
      </a>
      <ScrollToTop />
      <Hero page="service" />
      <ServiceContainer />
      <Footer />
    </>
  );
};

export default Services;
