import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ImageCarouselSection() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleAppointmentClick = () => {
    navigate('/contact');
  };

  // Call carousel methods for slide
  const goPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="container-fluid p-0 position-relative" style={{ maxWidth: '100vw' }}>
      <Carousel
        ref={carouselRef}
        interval={3000}
        controls={false}
        indicators={false}
        fade
      >
        {[1, 2].map((num) => (
          <Carousel.Item key={num}>
            <img
              className="d-block w-100"
              src={`assets/img-${num}.jpg`}
              alt={`Slide ${num}`}
              style={{ height: '550px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-shadow animate__animated animate__fadeInDown">
              <h2 className="fs-1 fw-bold mb-3">A better life starts with a beautiful smile.</h2>
              <p className="fs-5 mb-4 text-light">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <button className="btn btn-primary btn-lg" onClick={handleAppointmentClick}>
                Make an Appointment
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Invisible left button */}
      <div
        onClick={goPrev}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '15%',
          cursor: 'pointer',
          // Make invisible but clickable
          backgroundColor: 'transparent',
          zIndex: 10,
        }}
        aria-label="Previous Slide"
      />

      {/* Invisible right button */}
      <div
        onClick={goNext}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '15%',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          zIndex: 10,
        }}
        aria-label="Next Slide"
      />
    </div>
  );
}
