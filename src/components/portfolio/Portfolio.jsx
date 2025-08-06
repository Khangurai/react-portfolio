import React, { useState } from "react";
import { Row, Col, Card, Button, Typography, Tag } from "antd";
import { ExternalLink, Github } from "lucide-react";
import "./portfolio.css";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Website",
      category: "web",
      image: work1,
      description:
        "Website adaptable to all devices, with UI components and animated interactions.",
      technologies: ["React", "CSS", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Brand Design",
      category: "design",
      image: work2,
      description:
        "Beautiful and elegant design, with modern and attractive interfaces.",
      technologies: ["Figma", "Photoshop"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Mobile App",
      category: "app",
      image: work3,
      description:
        "App developed with React Native, with modern design and smooth animations.",
      technologies: ["React Native", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Web Application",
      category: "web",
      image: work4,
      description:
        "Full-stack web application with authentication and real-time features.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "UI/UX Design",
      category: "design",
      image: work5,
      description:
        "Modern and intuitive user interface design for mobile and web applications.",
      technologies: ["Figma", "Adobe XD"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const categories = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "app", label: "App" },
    { key: "design", label: "Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <Title level={2} className="section__title">
        Portfolio
      </Title>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container container">
        <div className="portfolio__filters">
          {categories.map((category) => (
            <Button
              key={category.key}
              type={activeFilter === category.key ? "primary" : "default"}
              className={`portfolio__filter ${
                activeFilter === category.key ? "active-work" : ""
              }`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <Row gutter={[24, 24]} className="portfolio__content">
          {filteredProjects.map((project) => (
            <Col xs={24} md={12} lg={8} key={project.id}>
              <Card
                hoverable
                className="portfolio__card"
                cover={
                  <div className="portfolio__img-container">
                    <img
                      alt={project.title}
                      src={project.image}
                      className="portfolio__img"
                    />
                    <div className="portfolio__overlay">
                      <div className="portfolio__links">
                        <Button
                          type="primary"
                          shape="circle"
                          icon={<ExternalLink size={16} />}
                          className="portfolio__link"
                          href={project.demoUrl}
                        />
                        <Button
                          type="primary"
                          shape="circle"
                          icon={<Github size={16} />}
                          className="portfolio__link"
                          href={project.codeUrl}
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <Meta
                  title={
                    <Title level={4} className="portfolio__title">
                      {project.title}
                    </Title>
                  }
                  description={
                    <div>
                      <Paragraph className="portfolio__description">
                        {project.description}
                      </Paragraph>
                      <div className="portfolio__technologies">
                        {project.technologies.map((tech, index) => (
                          <Tag key={index} className="portfolio__tech-tag">
                            {tech}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Portfolio;
