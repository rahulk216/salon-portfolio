import React from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import ServiceContainer from "../components/ServiceContainer/index";
import ScrollToTop from "../components/ScrollToTop/index";
import ComingSoon from "../components/ComingSoon";

const Services = () => {
  return (
    <>
      <ComingSoon />
      <ScrollToTop />
      <Hero />
      <ServiceContainer />
      <Footer />
    </>
  );
};

export default Services;
