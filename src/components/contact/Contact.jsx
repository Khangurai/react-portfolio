import React from 'react';
import { Row, Col, Card, Form, Input, Button, Typography, message } from 'antd';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import './contact.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Message sent successfully!');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      subtitle: 'user@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Whatsapp',
      subtitle: '999-888-777',
      description: 'Send me a message'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      subtitle: 'Myanmar - Yangon',
      description: 'Visit me'
    }
  ];

  return (
    <section className="contact section" id="contact">
      <Title level={2} className="section__title">Get in touch</Title>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container">
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={10}>
            <div className="contact__information">
              <Title level={3} className="contact__title">Talk to me</Title>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact__card" hoverable>
                  <div className="contact__card-data">
                    <div className="contact__card-icon">
                      {info.icon}
                    </div>
                    <div className="contact__card-info">
                      <Title level={5} className="contact__card-title">{info.title}</Title>
                      <span className="contact__card-subtitle">{info.subtitle}</span>
                      <Paragraph className="contact__card-description">
                        {info.description}
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <div className="contact__form-div">
              <Title level={3} className="contact__title">Write me your project</Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact__form"
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input 
                    placeholder="Insert your name"
                    className="contact__form-input"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Mail"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input 
                    placeholder="Insert your email"
                    className="contact__form-input"
                  />
                </Form.Item>

                <Form.Item
                  name="project"
                  label="Project"
                  rules={[{ required: true, message: 'Please describe your project!' }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Write your project"
                    className="contact__form-input contact__form-area"
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    size="large"
                    className="button contact__button"
                    icon={<Send size={16} />}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;