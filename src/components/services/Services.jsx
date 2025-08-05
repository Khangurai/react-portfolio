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
      title: 'UI/UX Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      details: [
        'I develop the user interface.',
        'Web page development.',
        'I create UX element interactions.',
        'I position your company brand.',
        'Design and mockups of products for companies.'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Frontend Developer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      details: [
        'I develop the user interface.',
        'Web page development.',
        'I create UX element interactions.',
        'I position your company brand.',
        'Design and mockups of products for companies.'
      ]
    },
    {
      icon: <Edit3 size={32} />,
      title: 'Branding Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      details: [
        'I develop the user interface.',
        'Web page development.',
        'I create UX element interactions.',
        'I position your company brand.',
        'Design and mockups of products for companies.'
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
      <span className="section__subtitle">What I offer</span>

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