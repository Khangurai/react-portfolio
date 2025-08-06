import React, { useState } from "react";
import { Row, Col, Card, Button, Typography, Tag } from "antd";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import "./portfolio.css";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
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
      title: "AI Powered Movie Recommendation System",
      category: "web",
      image: work1,
      description:
        "Introducing an innovative movie recommendation system that leverages textual features to provide personalized and accurate suggestions.",
      technologies: ["AI", "Python", "Streamlit"],
      demoUrl:
        "https://huggingface.co/spaces/Khangurai/AI_Powered_Movie_Recommendation_System",
      codeUrl: "https://github.com/Khangurai/AI_Movie_Recommend_System",
    },
    {
      id: 2,
      title: "Two Tango",
      category: "web",
      image: work2,
      description:
        "Track shared expenses and memorable places together. Because every love story deserves to be organized beautifully.",
      technologies: ["Javascript", "HTML", "CSS"],
      demoUrl: "https://two-tango.vercel.app/",
      codeUrl: "https://github.com/Khangurai/TwoTango",
    },
    {
      id: 3,
      title: "Student Management System",
      category: "enterprise",
      image: work3,
      description: "School Management System with Odoo 17",
      technologies: ["Odoo", "Python"],
      demoUrl: "#",
      codeUrl: "https://github.com/Khangurai/school_management_system",
    },
    {
      id: 4,
      title: "ParadiseIO Bot",
      category: "bot", // ✅ category key ကို bot လို့ပြောင်းထား
      image: work4,
      description:
        "Telegram automation bot with real-time interaction and APIs.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "https://github.com/Khangurai/telegram_bot",
    },
  ];

  const categories = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "enterprise", label: "Enterprise" },
    { key: "bot", label: "Bot" }, // ✅ filter option ထပ်ထည့်
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleCardClick = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

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
                  <div
                    className="portfolio__img-container"
                    onClick={() => handleCardClick(project.demoUrl)}
                    style={{ cursor: "pointer" }}
                  >
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
                          href={project.demoUrl}
                          target="_blank"
                        />
                        <Button
                          type="primary"
                          shape="circle"
                          icon={<Github size={16} />}
                          href={project.codeUrl}
                          target="_blank"
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <Meta
                  title={
                    <Title
                      level={4}
                      className="portfolio__title"
                      title={project.title} // ✅ Tooltip for full title
                    >
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
                          <Tag
                            key={index}
                            className={`portfolio__tech-tag tech-${tech
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </div>

                      {/* ✅ View Project Button
                      <Button
                        type="link"
                        icon={<ArrowRight size={16} />}
                        onClick={() => handleCardClick(project.demoUrl)}
                        style={{ paddingLeft: 0, marginTop: 10 }}
                      >
                        View Project
                      </Button> */}
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
