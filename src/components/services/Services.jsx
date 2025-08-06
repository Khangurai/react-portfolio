import React from 'react';
import { Row, Col, Card, Typography, Modal } from 'antd';
import { Monitor, Smartphone, Edit3, ArrowRight } from 'lucide-react';
import './services.css';

const { Title, Paragraph } = Typography;

const Services = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const services = [
    {
      icon: <Monitor size={32} />,
      title: 'UI/UX Design (Learning)',
      description: 'Currently learning how to design clean and user-friendly interfaces using modern tools.',
      details: [
        'Basic UI layout and design principles.',
        'Creating simple wireframes and mockups.',
        'Learning color theory and typography.',
        'Practicing responsive design.',
        'Exploring design tools like Figma and Canva.'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Frontend Development (Beginner)',
      description: 'Building small projects to practice HTML, CSS, and JavaScript, and learning React step by step.',
      details: [
        'Creating simple web pages with HTML and CSS.',
        'Adding interactivity using JavaScript.',
        'Building basic React components.',
        'Learning to use GitHub for project hosting.',
        'Improving coding skills through practice.'
      ]
    },
    {
      icon: <Edit3 size={32} />,
      title: 'Branding Practice',
      description: 'Experimenting with logo and brand design ideas as part of my learning journey.',
      details: [
        'Practicing logo creation with free tools.',
        'Understanding basic branding concepts.',
        'Creating simple social media graphics.',
        'Exploring color palettes for branding.',
        'Learning from real-world design examples.'
      ]
    }
  ];

  const showModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  return (
    <section className="services section" id="services">
      <Title level={2} className="section__title">Services</Title>
      <span className="section__subtitle">What I'm Learning</span>

      <div className="services__container container">
        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="services__card" hoverable>
                <div className="services__icon">
                  {service.icon}
                </div>
                <Title level={4} className="services__title">{service.title}</Title>
                <Paragraph className="services__description">
                  {service.description}
                </Paragraph>
                <div 
                  className="services__button"
                  onClick={() => showModal(service)}
                >
                  View More <ArrowRight size={16} className="services__button-icon" />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        title={selectedService?.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        className="services__modal"
      >
        {selectedService && (
          <div className="services__modal-content">
            <div className="services__modal-icon">
              {selectedService.icon}
            </div>
            <Paragraph>{selectedService.description}</Paragraph>
            <ul className="services__modal-services">
              {selectedService.details.map((detail, index) => (
                <li key={index} className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon-check"></i>
                  <p className="services__modal-info">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;
