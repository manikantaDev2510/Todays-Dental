import React, { useState } from "react";
import axios from "axios";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else {
      // simple email regex check
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMsg("");
      return;
    }

    setErrors({});

    try {
      // POST to fake API
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setStatusMsg("Message sent successfully!");
      // reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatusMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <FadeInOnScroll>
      <div className="container my-5">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-outline-primary">
            Send Message
          </button>

          {/* Status message */}
          {statusMsg && (
            <div
              className={`mt-3 alert ${statusMsg.includes("successfully")
                ? "alert-success"
                : "alert-danger"
                }`}
              role="alert"
            >
              {statusMsg}
            </div>
          )}
        </form>

        {/* Google Maps iframe */}
        <div className="mt-5">
          <h4>Our Clinic Location</h4>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0866056112866!2d-122.42067968468143!3d37.778519679758816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e1a33a24d%3A0x6270970a1d54d4d4!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1632938873112!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
