import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    icon: "bi-shield-plus text-primary",
    title: "Dental Implants",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-star-fill text-warning",
    title: "Cosmetic Dentistry",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-heart-fill text-danger",
    title: "Dental Care",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-brightness-high-fill text-info",
    title: "Teeth Whitening",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-diagram-3-fill text-success",
    title: "Dental Calculus",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-diagram-2-fill text-secondary",
    title: "Periondontics",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-sliders text-dark",
    title: "Clip & Braces",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: "bi-gear-fill text-warning",
    title: "Root Canal",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const truncateText = (text, maxLength = 60) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "....";
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mb-5 animate__animated animate__fadeInUp">
          <h5 className="section-title bg-white text-center text-primary fw-bold px-3">
            Services
          </h5>
          <h1 className="fw-bold mb-3">Our Services</h1>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 animate__animated animate__fadeInUp"
              key={index}
            >
              <div
                className="hover-item rounded shadow-sm pt-3 bg-light h-100 border hover-shadow transition"
                style={{ cursor: "pointer" }}
                onClick={() => handleOpenModal(service)}
              >
                <div className="p-4 text-center">
                  <i className={`bi ${service.icon} fs-1 mb-3`}></i>
                  <h5 className="mt-3">{service.title}</h5>
                  <p className="text-muted">{truncateText(service.desc)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <i className={`bi ${selectedService?.icon} fs-1 mb-3`}></i>
          <p>{selectedService?.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
