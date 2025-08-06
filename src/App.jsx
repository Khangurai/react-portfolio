import React from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { FloatButton } from "antd";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
          fontFamily: "Poppins, sans-serif",
        },
      }}
    >
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <FloatButton.BackTop />
    </ConfigProvider>
  );
};

export default App;
