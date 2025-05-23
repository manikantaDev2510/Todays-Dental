import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function HeroSection({ title }) {
    return (
        <div
            className="text-white d-flex align-items-center position-relative"
            style={{
                height: '500px',
                background: "url('/assets/img-1.jpg') center/cover no-repeat",
            }}
        >
            {/* Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
            />

            {/* Content */}
            <Container className="position-relative z-2 text-center">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
                            {title}
                        </h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-white text-decoration-none">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active text-white"
                                    aria-current="page"
                                >
                                    {title}
                                </li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
