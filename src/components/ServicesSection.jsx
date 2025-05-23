import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

const services = [
  {
    icon: "bi-shield-plus text-primary",
    title: "Dental Implants",
    desc: "Implants restore your smile and confidence with natural-looking replacements.",
  },
  {
    icon: "bi-star-fill text-warning",
    title: "Cosmetic Dentistry",
    desc: "Enhance your teeth appearance for a brighter, more attractive smile.",
  },
  {
    icon: "bi-heart-fill text-danger",
    title: "Dental Care",
    desc: "Routine checkups and cleaning to keep your oral health at its best.",
  },
  {
    icon: "bi-brightness-high-fill text-info",
    title: "Teeth Whitening",
    desc: "Professional whitening for a bright and confident smile.",
  },
  {
    icon: "bi-diagram-3-fill text-success",
    title: "Dental Calculus",
    desc: "Effective removal of tartar to prevent gum disease.",
  },
  {
    icon: "bi-diagram-2-fill text-secondary",
    title: "Periondontics",
    desc: "Specialized gum treatments for stronger dental foundations.",
  },
  {
    icon: "bi-sliders text-dark",
    title: "Clip & Braces",
    desc: "Align your teeth with modern and comfortable braces.",
  },
  {
    icon: "bi-gear-fill text-warning",
    title: "Root Canal",
    desc: "Save damaged teeth and relieve pain with expert root canal therapy.",
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const openModal = (service) => {
    setSelected(service);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelected(null);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">Services</h5>
          <h1 className="fw-bold">Our Services</h1>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                className="hover-item  text-center h-100 shadow-sm"
                onClick={() => openModal(service)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <i className={`bi ${service.icon} fs-1 mb-3`}></i>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ minHeight: "60px" }}
                  >
                    {service.desc.length > 60
                      ? service.desc.slice(0, 60) + "..."
                      : service.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <i className={`bi ${selected?.icon} fs-1 mb-3`}></i>
          <p>{selected?.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
