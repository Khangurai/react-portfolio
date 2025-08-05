import React from "react";
import { Instagram, Github, Facebook } from "lucide-react";

export const Social = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/",
      icon: <Instagram size={20} />,
      label: "Instagram"
    },
    {
      href: "https://github.com/",
      icon: <Github size={20} />,
      label: "GitHub"
    },
    {
      href: "https://facebook.com/",
      icon: <Facebook size={20} />,
      label: "Facebook"
    }
  ];

  return (
    <div className="home__social">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};