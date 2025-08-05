import { useState } from "react";
import { Drawer, Button } from "antd";
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  Image, 
  Mail, 
  Menu,
  X
} from "lucide-react";
import "./header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { key: 'home', icon: <Home size={18} />, label: 'Home', href: '#home' },
    { key: 'about', icon: <User size={18} />, label: 'About', href: '#about' },
    { key: 'skills', icon: <FileText size={18} />, label: 'Skills', href: '#skills' },
    { key: 'services', icon: <Briefcase size={18} />, label: 'Services', href: '#services' },
    { key: 'portfolio', icon: <Image size={18} />, label: 'Portfolio', href: '#portfolio' },
    { key: 'contact', icon: <Mail size={18} />, label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Aung
        </a>
        
        {/* Desktop Menu */}
        <div className="nav__menu">
          <ul className="nav__list">
            {menuItems.map((item) => (
              <li key={item.key} className="nav__item">
                <a href={item.href} className="nav__link">
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          type="text"
          className="nav__toggle"
          icon={<Menu size={20} />}
          onClick={() => setIsDrawerOpen(true)}
        />

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
          className="mobile-drawer"
          closeIcon={<X size={20} />}
        >
          <ul className="mobile-nav__list">
            {menuItems.map((item) => (
              <li key={item.key} className="mobile-nav__item">
                <a 
                  href={item.href} 
                  className="mobile-nav__link"
                  onClick={handleMenuClick}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;