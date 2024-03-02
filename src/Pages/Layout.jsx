import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Offer from "../components/Offer/Offer";

const Layout = () => {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Layout;
