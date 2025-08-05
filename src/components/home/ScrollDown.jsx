import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button">
        <div className="home__scroll-mouse">
          <div className="wheel"></div>
        </div>
        <span className="home__scroll-name">Scroll Down</span>
        <ChevronDown size={20} className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default ScrollDown;