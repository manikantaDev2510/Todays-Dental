import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/" className="text-primary fs-2 fw-bold">
          Todays Dental
        </Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="fs-5 fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fs-5 fw-semibold">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="fs-5 fw-semibold">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fs-5 fw-semibold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
