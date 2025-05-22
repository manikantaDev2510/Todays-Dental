import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container-fluid p-0">
      <Carousel interval={2000} controls={false} indicators={false} fade>
        {[1, 2].map((num) => (
          <Carousel.Item key={num}>
            <img
              className="d-block w-100"
              src={`assets/img-${num}.jpg`}
              alt={`Slide ${num}`}
              style={{ height: '550px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-shadow animate__animated animate__fadeInDown ">
              <h2 className="fs-1 fw-bold mb-3  ">A better life starts with a beautiful smile.</h2>
              <p className="fs-5 mb-4 text-light  ">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <button className="btn btn-primary btn-lg  " onClick={handleAppointmentClick}>
                Make an Appointment
              </button>
            </Carousel.Caption>
          </Carousel.Item>

        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
