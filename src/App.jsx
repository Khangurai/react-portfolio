import React from "react";
import { ConfigProvider } from "antd";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";

const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 8,
    fontFamily: 'Poppins, sans-serif',
  },
};

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Header />
      <main className="main">
        <Home />
      </main>
    </ConfigProvider>
  );
};

export default App;
