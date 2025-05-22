import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import 'animate.css';

export default function TabbedSection() {
  const [activeKey, setActiveKey] = useState('whatwedo');
  const [animate, setAnimate] = useState(false);

  const tabData = {
    whatwedo: {
      title: 'We Offer High Quality Services',
      image: 'assets/abt-1.jpg',
      content: [
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur."
      ]
    },
    mission: {
      title: 'To Accommodate All Patients',
      image: 'assets/abt-2.jpg',
      content: [
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur."
      ]
    },
    goal: {
      title: 'Help Our Customers Needs',
      image: 'assets/abt-3.jpg',
      content: [
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur."
      ]
    }
  };

  const current = tabData[activeKey];

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10); // Re-trigger animation
    return () => clearTimeout(timer);
  }, [activeKey]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center animate__animated animate__fadeInUp">
          <h5 className="section-title bg-white text-center text-primary fw-bold px-3">
            Mission
          </h5>
          <h1 className="fw-bold mb-5">What We Do</h1>
        </div>

        <Row className="d-md-flex">
          {/* Image Column */}
          <Col md={6} className="order-md-last d-none d-md-block p-0">
            <div
              className={`h-100 animate__animated ${animate ? 'animate__fadeInRight' : ''
                }`}
              style={{
                backgroundImage: `url(${current.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
              }}
            />
          </Col>

          {/* Text and Tabs Column */}
          <Col md={6} className="order-md-first pr-md-5">
            <Row>
              <Col md={12} className="mb-4">
                <Nav
                  variant="pills"
                  activeKey={activeKey}
                  onSelect={(selectedKey) => setActiveKey(selectedKey)}
                  className="flex-column flex-md-row"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="whatwedo">What we do</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mission">Our mission</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="goal">Our goal</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={12}>
                <div
                  className={`animate__animated ${animate ? 'animate__fadeInLeft' : ''
                    }`}
                >
                  <h2 className="mb-4">{current.title}</h2>
                  {current.content.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
