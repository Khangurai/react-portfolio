import React from "react";
import { Button } from "antd";
import { Send } from "lucide-react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Aung Kaung Khant
        <span className="home__hand">👋</span>
      </h1>
      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
        I'm a creative developer based in Myanmar, and I'm very passionate and
        dedicated to my work. I love creating beautiful and functional web applications.
      </p>
      <Button 
        type="primary" 
        size="large"
        className="home__button"
        icon={<Send size={18} />}
        href="#contact"
      >
        Say Hello
      </Button>
    </div>
  );
};

export default Data;