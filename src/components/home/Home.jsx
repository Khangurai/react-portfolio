import React from "react";
import { Social } from "./Social";
import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import { Col, Row } from "antd";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__containehome__contentr container grid">
        <div className=" grid">
          <Row>
            <Col span={12}>
              <Data />
            </Col>
            <Col span={12}>
              <div className="home__img"></div>
            </Col>
          </Row>
          <Social />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
