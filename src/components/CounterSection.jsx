import React, { useEffect, useState } from 'react';

const Counter = ({ target, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="col-lg-3 animate__animated animate__fadeIn" style={{ animationDelay: delay }}>
      <div className="d-flex align-items-center gap-3">
        <h1 className="text-primary mb-0">{count}</h1>
        <h5 className="text-white mb-0">{label}</h5>
      </div>
    </div>
  );
};

const CounterSection = () => (
  <section className="bg-info py-5">
    <div className="container">
      <div className="row text-center">
        <Counter target={14} label="Years of Experience" delay="0.1s" />
        <Counter target={4500} label="Qualified Dentist" delay="0.3s" />
        <Counter target={4200} label="Happy Smiling Customer" delay="0.5s" />
        <Counter target={320} label="Patients Per Year" delay="0.7s" />
      </div>
    </div>
  </section>
);

export default CounterSection;
