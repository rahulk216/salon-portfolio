import { useEffect, useState } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

//components
import Layout from "./Pages/Layout";
import Services from "./Pages/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
