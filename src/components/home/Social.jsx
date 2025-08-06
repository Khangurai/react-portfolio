import React from "react";
import { Instagram, Github, Facebook } from "lucide-react";

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={20} />
      </a>

      <a
        href="https://github.com/Khangurai"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} />
      </a>

      <a
        href="https://facebook.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={20} />
      </a>
    </div>
  );
};
