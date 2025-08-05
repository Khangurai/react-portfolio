import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Download, Award, Briefcase, HeadphonesIcon } from 'lucide-react';
import './about.css';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <section className="about section" id="about">
      <Title level={2} className="section__title">About Me</Title>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12} className="about__img-col">
            <img src="/src/assets/about.jpg" alt="About" className="about__img" />
          </Col>
          
          <Col xs={24} md={12}>
            <div className="about__data">
              <Paragraph className="about__description">
                Web developer, with extensive knowledge and years of experience, working in web 
                technologies and UI / UX design, delivering quality work.
              </Paragraph>

              <Row gutter={[16, 16]} className="about__info">
                <Col xs={8} sm={8}>
                  <Card className="about__info-card" bodyStyle={{ padding: '16px', textAlign: 'center' }}>
                    <Award size={24} className="about__info-icon" />
                    <Title level={4} className="about__info-title">08+</Title>
                    <span className="about__info-name">Years<br />experience</span>
                  </Card>
                </Col>
                
                <Col xs={8} sm={8}>
                  <Card className="about__info-card" bodyStyle={{ padding: '16px', textAlign: 'center' }}>
                    <Briefcase size={24} className="about__info-icon" />
                    <Title level={4} className="about__info-title">20+</Title>
                    <span className="about__info-name">Completed<br />projects</span>
                  </Card>
                </Col>
                
                <Col xs={8} sm={8}>
                  <Card className="about__info-card" bodyStyle={{ padding: '16px', textAlign: 'center' }}>
                    <HeadphonesIcon size={24} className="about__info-icon" />
                    <Title level={4} className="about__info-title">24/7</Title>
                    <span className="about__info-name">Online<br />support</span>
                  </Card>
                </Col>
              </Row>

              <Button 
                type="primary" 
                size="large" 
                className="button about__button"
                icon={<Download size={16} />}
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