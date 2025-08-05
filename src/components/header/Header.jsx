import { useState } from "react";
import { Home, User, FileText, Briefcase, Image, MessageCircle } from "lucide-react";
import "./header.css";

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Aung
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                <Home className="nav__icon" size={20} />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <User className="nav__icon" size={20} />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FileText className="nav__icon" size={20} />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <Briefcase className="nav__icon" size={20} />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <Image className="nav__icon" size={20} />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <MessageCircle className="nav__icon" size={20} />
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
