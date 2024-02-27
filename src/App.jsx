import { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

//components
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
