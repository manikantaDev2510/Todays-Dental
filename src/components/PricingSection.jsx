import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PricingSection() {
    const navigate = useNavigate();

    const handleAppointmentClick = () => {
        navigate('/contact');
    };

    const plans = [
        {
            title: 'Basic',
            price: '$24.50',
            features: [
                'Diagnostic Services',
                'Professional Consultation',
                'Tooth Implants',
                'Surgical Extractions',
                'Teeth Whitening',
            ],
        },
        {
            title: 'Standard',
            price: '$34.50',
            features: [
                'Diagnostic Services',
                'Professional Consultation',
                'Tooth Implants',
                'Surgical Extractions',
                'Teeth Whitening',
            ],
        },
        {
            title: 'Premium',
            price: '$54.50',
            features: [
                'Diagnostic Services',
                'Professional Consultation',
                'Tooth Implants',
                'Surgical Extractions',
                'Teeth Whitening',
            ],
        },
        {
            title: 'Platinum',
            price: '$89.50',
            features: [
                'Diagnostic Services',
                'Professional Consultation',
                'Tooth Implants',
                'Surgical Extractions',
                'Teeth Whitening',
            ],
        },
    ];

    return (
        <div className="container my-5">
            <div className="text-center mb-5 animate__animated animate__fadeInUp">
                <h5 className=" section-title bg-white text-center text-primary fw-bold px-3">
                    Pricing
                </h5>
                <h1 className="fw-bold mb-3">Our Best Pricing</h1>
            </div>
            <div className="row ">
                {plans.map((plan, idx) => (
                    <div key={idx} className="col-md-3 mb-4 ">
                        <div className="card h-100 shadow-sm border-primary   hover-item ">
                            <div className="card-header text-center bg-primary text-white">
                                <h4 className="my-0">{plan.title}</h4>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="card-title pricing-card-title">
                                    {plan.price} <small className="text-muted">/ session</small>
                                </h3>
                                <ul className="list-unstyled mt-3 mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <button className="btn btn-outline-primary" onClick={handleAppointmentClick}>Choose Plan</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
