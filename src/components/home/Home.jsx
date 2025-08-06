import React from "react";
import { Social } from "./Social";
import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import { Col, Row } from "antd";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container home__content container grid">
        <div className=" grid">
          <Row>
            <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
              <Data />
            </Col>
            <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
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
