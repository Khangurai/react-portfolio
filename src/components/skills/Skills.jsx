import React from 'react';
import { Row, Col, Card, Progress, Typography } from 'antd';
import { Code, Palette, Server } from 'lucide-react';
import './skills.css';

const { Title } = Typography;

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 }
  ];

  const backendSkills = [
    { name: 'PHP', level: 70 },
    { name: 'Node.js', level: 75 },
    { name: 'Firebase', level: 65 },
    { name: 'Python', level: 60 }
  ];

  const designSkills = [
    { name: 'Figma', level: 85 },
    { name: 'Sketch', level: 70 },
    { name: 'Photoshop', level: 75 },
    { name: 'Adobe XD', level: 80 }
  ];

  const SkillCard = ({ title, icon, skills }) => (
    <Card className="skills__card" title={
      <div className="skills__card-header">
        {icon}
        <Title level={4} className="skills__card-title">{title}</Title>
      </div>
    }>
      <div className="skills__list">
        {skills.map((skill, index) => (
          <div key={index} className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">{skill.name}</h3>
              <span className="skills__number">{skill.level}%</span>
            </div>
            <Progress 
              percent={skill.level} 
              showInfo={false}
              strokeColor="var(--title-color)"
              className="skills__bar"
            />
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section className="skills section" id="skills">
      <Title level={2} className="section__title">Skills</Title>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container">
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={8}>
            <SkillCard 
              title="Frontend Developer"
              icon={<Code size={24} />}
              skills={frontendSkills}
            />
          </Col>
          
          <Col xs={24} lg={8}>
            <SkillCard 
              title="Backend Developer"
              icon={<Server size={24} />}
              skills={backendSkills}
            />
          </Col>
          
          <Col xs={24} lg={8}>
            <SkillCard 
              title="Designer"
              icon={<Palette size={24} />}
              skills={designSkills}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Skills;