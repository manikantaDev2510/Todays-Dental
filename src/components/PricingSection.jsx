import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function PricingSection() {
    const navigate = useNavigate();

    const handleAppointmentClick = () => {
        navigate("/contact");
    };

    const plans = [
        { title: "Basic", price: "$24.50" },
        { title: "Standard", price: "$34.50" },
        { title: "Premium", price: "$54.50" },
        { title: "Platinum", price: "$89.50" },
    ];

    const features = [
        "Diagnostic Services",
        "Professional Consultation",
        "Tooth Implants",
        "Surgical Extractions",
        "Teeth Whitening",
    ];

    return (
        <Container className="my-5">
            {/* Section Header */}
            <div className="text-center mb-5">
                <h5 className="text-primary fw-bold">Pricing</h5>
                <h1 className="fw-bold">Our Best Pricing</h1>
            </div>

            {/* Pricing Cards */}
            <Row>
                {plans.map((plan, index) => (
                    <Col key={index} md={6} lg={3} className="mb-4">
                        <Card className="h-100 shadow-sm border-primary hover-item">
                            <Card.Header className="bg-primary text-white text-center">
                                <h4>{plan.title}</h4>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <Card.Title className="mb-3">
                                    {plan.price} <small className="text-muted">/ session</small>
                                </Card.Title>
                                <ul className="list-unstyled mb-4">
                                    {features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <Button
                                    variant="outline-primary"
                                    onClick={handleAppointmentClick}
                                >
                                    Choose Plan
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
