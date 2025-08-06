import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { Download, BookOpen, Code, Rocket } from "lucide-react";
import "./about.css";
import aboutImage from "../../assets/profile2.jpg";
import CV from "../../assets/CV.pdf";

const { Title, Paragraph } = Typography;

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "John-Cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about section" id="about">
      <Title level={2} className="section__title">
        About Me
      </Title>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12} className="about__img-col">
            <img src={aboutImage} alt="About" className="about__img" />
          </Col>

          <Col xs={24} md={12}>
            <div className="about__data">
              <Paragraph className="about__description">
                I am a beginner web developer passionate about learning and building projects.
                Currently improving my skills in front-end and back-end development.
              </Paragraph>

              <Row gutter={[16, 16]} className="about__info">
                <Col xs={8} sm={8}>
                  <Card
                    className="about__info-card"
                    bodyStyle={{ padding: "16px", textAlign: "center" }}
                  >
                    <BookOpen size={24} className="about__info-icon" />
                    <Title level={4} className="about__info-title">
                      Learning
                    </Title>
                    <span className="about__info-name">
                      Constantly<br />
                      improving
                    </span>
                  </Card>
                </Col>

                <Col xs={8} sm={8}>
                  <Card
                    className="about__info-card"
                    bodyStyle={{ padding: "16px", textAlign: "center" }}
                  >
                    <Code size={24} className="about__info-icon" />
                    <Title level={4} className="about__info-title">
                      5+
                    </Title>
                    <span className="about__info-name">
                      Practice<br />
                      projects
                    </span>
                  </Card>
                </Col>

                <Col xs={8} sm={8}>
                  <Card
                    className="about__info-card"
                    bodyStyle={{ padding: "16px", textAlign: "center" }}
                  >
                    <Rocket size={24} className="about__info-icon" />
                    <Title level={4} className="about__info-title">
                      Open
                    </Title>
                    <span className="about__info-name">
                      To new<br />
                      opportunities
                    </span>
                  </Card>
                </Col>
              </Row>

              <Button
                type="primary"
                size="large"
                className="button about__button"
                icon={<Download size={16} />}
                onClick={handleDownload}
              >
                Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
