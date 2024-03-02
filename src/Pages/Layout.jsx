import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

const Layout = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Layout;
