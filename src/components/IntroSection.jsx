import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function IntroSection() {
    const features = [
        {
            title: "Well Experienced Dentist",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        },
        {
            title: "High Technology Facilities",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        },
        {
            title: "Comfortable Clinics",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        },
    ];

    return (
        <Container className="my-5">
            {/* Section Title */}
            <div className="text-center mb-5">
                <h5 className="text-primary fw-bold">About</h5>
                <h1 className="fw-bold">Our Clinic</h1>
            </div>

            <Row className="align-items-center">
                {/* Left - Image */}
                <Col md={6} className="mb-4 mb-md-0">
                    <Image
                        src="assets/about.jpg"
                        alt="About Dentacare"
                        fluid
                        rounded
                        className="shadow"
                        style={{ objectFit: 'cover', height: 450, width: '100%' }}
                    />
                </Col>

                {/* Right - Text */}
                <Col md={6}>
                    <h2 className="text-primary fw-bold mb-4">Dentacare with a Personal Touch</h2>
                    <p className="text-muted lead mb-4">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>

                    {/* Features List */}
                    {features.map((item, index) => (
                        <div key={index} className="d-flex mb-4">
                            <div className="text-primary fs-4 me-3">✔</div>
                            <div>
                                <h5 className="mb-1">{item.title}</h5>
                                <p className="text-muted mb-0">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
