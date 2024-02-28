import { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

//components
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
