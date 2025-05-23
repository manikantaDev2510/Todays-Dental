import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ImageCarouselSection() {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: 'assets/img-1.jpg',
      title: 'A better life starts with a beautiful smile.',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      id: 2,
      image: 'assets/img-2.jpg',
      title: 'Creating smiles that last a lifetime.',
      description:
        'We believe in personalized dental care to give you the best smile possible.',
    },
  ];

  return (
    <Carousel fade interval={3000}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="d-block w-100"
            style={{ height: '550px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="animate__animated animate__fadeInDown bg-opacity-50 p-4 rounded">
            <h2 className="fw-bold fs-1 mb-3">{slide.title}</h2>
            <p className='fs-5 mb-4 text-light'>{slide.description}</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Make an Appointment
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
