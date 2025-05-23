import React, { useState, useEffect } from 'react';
import { Nav, Row, Col, Container } from 'react-bootstrap';
import 'animate.css';

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState('whatwedo');
  const [animate, setAnimate] = useState(false);

  const tabContent = {
    whatwedo: {
      title: 'We Offer High Quality Services',
      image: 'assets/abt-1.jpg',
      content: [
        'We provide exceptional dental services with modern equipment and personalized care.',
        'Your comfort and satisfaction are our top priorities.'
      ]
    },
    mission: {
      title: 'To Accommodate All Patients',
      image: 'assets/abt-2.jpg',
      content: [
        'Our mission is to make dental care accessible and stress-free for everyone.',
        'We ensure every visit is pleasant and worry-free.'
      ]
    },
    goal: {
      title: 'Help Our Customers Needs',
      image: 'assets/abt-3.jpg',
      content: [
        'We aim to understand and meet each patient’s unique dental goals.',
        'We work closely with you to create your perfect smile.'
      ]
    }
  };

  const { title, image, content } = tabContent[activeTab];

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5 animate__animated animate__fadeInUp">
          <h5 className="text-primary fw-bold">Mission</h5>
          <h1 className="fw-bold">What We Do</h1>
        </div>

        <Row>
          {/* Text & Tabs */}
          <Col md={6}>
            <Nav
              variant="pills"
              activeKey={activeTab}
              onSelect={(key) => setActiveTab(key)}
              className="mb-4 justify-content-center justify-content-md-start"
            >
              <Nav.Item>
                <Nav.Link eventKey="whatwedo">What We Do</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mission">Our Mission</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="goal">Our Goal</Nav.Link>
              </Nav.Item>
            </Nav>

            <div className={`animate__animated ${animate ? 'animate__fadeInLeft' : ''}`}>
              <h3 className="mb-3">{title}</h3>
              {content.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </Col>

          {/* Image */}
          <Col md={6} className="d-none d-md-block">
            <div
              className={`h-100 animate__animated ${animate ? 'animate__fadeInRight' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                borderRadius: '8px',
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
