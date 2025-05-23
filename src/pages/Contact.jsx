import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col
} from "react-bootstrap";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatusMsg("");
      return;
    }

    setErrors({});
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setStatusMsg("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatusMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 fw-bold text-center">Contact Us</h1>

      {/* Contact Info Section */}
      <Row className="mb-4 text-center">
        <Col md={4}>
          <h6>📞 Phone</h6>
          <p>+91 63098 99486</p>
        </Col>
        <Col md={4}>
          <h6>📧 Email</h6>
          <p>todaysdental@yourclinic.com</p>
        </Col>
        <Col md={4}>
          <h6>📍 Address</h6>
          <p>123 Smile Street, Happy Town, TX
          </p>
        </Col>
      </Row>

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            isInvalid={!!errors.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            isInvalid={!!errors.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            isInvalid={!!errors.subject}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message<span className="text-danger">*</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            isInvalid={!!errors.message}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">Send Message</Button>

        {statusMsg && (
          <Alert
            variant={statusMsg.includes("successfully") ? "success" : "danger"}
            className="mt-3"
          >
            {statusMsg}
          </Alert>
        )}
      </Form>

      <Row className="mt-5">
        <Col>
          <h4>Our Clinic Location</h4>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12132.825050381485!2d78.396592670137!3d17.49185028812143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f30076cb0f%3A0xd71e8dba19e3b3ae!2sKPHB%20METRO!5e0!3m2!1sen!2sin!4v1748003566951!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
      </Row>
    </Container>
  );
}