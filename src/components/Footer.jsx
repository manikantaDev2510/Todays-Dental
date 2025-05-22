import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="container py-5">
        <div className="row justify-content-around ">

          {/* About */}
          <div className="col-md-3 mb-4 text-center">
            <h4 className="text-white mb-3 fs-2">Your Dental Clinic</h4>
            <p>Providing exceptional dental care with a gentle touch. Your smile is our priority.</p>
            <div className="d-flex justify-content-center">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, i) => (
                <a
                  key={i}
                  className="btn btn-light btn-square rounded-circle me-2"
                  href="#"
                  aria-label={icon}
                  style={{ textDecoration: "none" }}
                >
                  <i className={`fab fa-${icon} text-primary`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white mb-3 fs-2">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { name: "Services", link: "/services" },
                { name: "Our Team", link: "/about" },
                { name: "Contact", link: "/contact" },
                { name: "Book Appointment", link: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="text-light d-block mb-2"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-angle-right text-secondary me-2"></i>{item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white mb-3 fs-2">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt text-secondary me-2"></i>
                123 Smile Street, Happy Town, TX
              </li>
              <li className="mb-2">
                <i className="fas fa-phone-alt text-secondary me-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope text-secondary me-2"></i>
                contact@dentalclinic.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-light mt-5 mb-4" />

        {/* Footer Bottom */}
        <div className="row text-center text-md-start align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <a href="/" className="text-secondary" style={{ textDecoration: "none" }}>
                Your Dental Clinic
              </a>
              . All rights reserved. Designed by{" "}
              <a
                href="https://github.com/manikantaDev2510/Todays-Dental"
                target="_blank"
                rel="noreferrer"
                className="text-secondary"
                style={{ textDecoration: "none" }}
              >
                Veera Manikant
              </a>
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            {["Home", "Privacy", "Help", "FAQs"].map((item, i) => (
              <a
                key={i}
                href="/"
                className="text-light me-3"
                style={{ textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
