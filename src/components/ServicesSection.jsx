import React, { useState } from "react";

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

  const openModal = (service) => {
    setSelectedService(service);
    const modalElement = document.getElementById("serviceModal");
    const modal = new window.bootstrap.Modal(modalElement); // Removed backdrop:false
    modal.show();
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
                onClick={() => openModal(service)}
              >
                <div className="p-4 text-center">
                  <i className={`bi ${service.icon} text-primary fs-1`}></i>
                  <h5 className="mt-3">{service.title}</h5>
                  <p className="text-muted">{truncateText(service.desc)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
