import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1000;
    const interval = 30;
    const step = target / (duration / interval);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <Col xs={12} md={6} lg={3} className="text-center mb-4">
      <h1 className="text-primary">{count}</h1>
      <p className="fw-semibold">{label}</p>
    </Col>
  );
}

export default function CounterSection() {
  return (
    <section className="bg-info py-3 text-white">
      <Container>
        <Row>
          <Counter target={14} label="Years of Experience" />
          <Counter target={4500} label="Qualified Dentists" />
          <Counter target={4200} label="Happy Smiling Customers" />
          <Counter target={320} label="Patients Per Year" />
        </Row>
      </Container>
    </section>
  );
}
