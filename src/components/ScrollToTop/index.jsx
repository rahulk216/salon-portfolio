import React, { useEffect, useState, useRef } from "react";
import "./index.scss";
import Scroll from "../../assets/svg/Scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = 210;
      if (scrollTop > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          className="scroll-to-top-container"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <Scroll />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ScrollToTop;
