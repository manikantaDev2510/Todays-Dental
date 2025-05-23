import React from "react";

export default function Footer() {
  const socialLinks = ["facebook-f", "twitter", "instagram", "linkedin-in"];
  const quickLinks = [
    { name: "Services", link: "/services" },
    { name: "Our Team", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Book Appointment", link: "/contact" },
  ];
  const contactDetails = [
    { icon: "map-marker-alt", text: "123 Smile Street, Happy Town, TX" },
    { icon: "phone-alt", text: "+91 63098 99486" },
    { icon: "envelope", text: "todaysdental@yourclinic.com" },
  ];
  const bottomLinks = ["Home", "Privacy", "Help", "FAQs"];

  return (
    <footer className="bg-dark text-light pt-5 mt-5" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="container py-5">
        <div className="row justify-content-around">

          {/* About Section */}
          <div className="col-md-3 mb-4 text-center">
            <h4 className="text-white mb-3 fs-2">Your Dental Clinic</h4>
            <p>Providing exceptional dental care with a gentle touch. Your smile is our priority.</p>
            <div className="d-flex justify-content-center">
              {socialLinks.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={icon}
                  className="btn btn-light btn-square rounded-circle me-2"
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
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-light d-block mb-2 text-decoration-none">
                    <i className="fas fa-angle-right text-secondary me-2"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white mb-3 fs-2">Contact Us</h5>
            <ul className="list-unstyled">
              {contactDetails.map((item, index) => (
                <li key={index} className="mb-2">
                  <i className={`fas fa-${item.icon} text-secondary me-2`}></i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="text-light mt-5 mb-4" />

        {/* Footer Bottom */}
        <div className="row text-center text-md-start align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <a href="/" className="text-secondary text-decoration-none">
                Your Dental Clinic
              </a>
              . All rights reserved. Designed by{" "}
              <a
                href="https://github.com/manikantaDev2510/Todays-Dental"
                target="_blank"
                rel="noreferrer"
                className="text-secondary text-decoration-none"
              >
                Veera Manikant
              </a>
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            {bottomLinks.map((link, index) => (
              <a key={index} href="/" className="text-light me-3 text-decoration-none">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
