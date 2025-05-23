import React from "react";
import { Link } from "react-router-dom";

const doctors = [
    { name: "Rick Steves", role: "Travel Writer", image: "assets/doc-1.jpg" },
    { name: "Samantha Brown", role: "Travel Host", image: "assets/doc-2.jpg" },
    { name: "Steve Irwin", role: "Wildlife Expert", image: "assets/doc-3.jpg" },
    { name: "Megan McKenna", role: "Blogger", image: "assets/doc-4.jpg" },
    { name: "Rick Steves", role: "Travel Writer", image: "assets/doc-5.jpg" },
    { name: "Samantha Brown", role: "Travel Host", image: "assets/doc-6.jpg" },
    { name: "Steve Irwin", role: "Wildlife Expert", image: "assets/doc-7.jpg" },
    { name: "Megan McKenna", role: "Blogger", image: "assets/doc-8.jpg" },
];

const socialPlatforms = [
    { iconClass: "bi bi-facebook", href: "/#" },
    { iconClass: "bi bi-twitter", href: "/#" },
    { iconClass: "bi bi-instagram", href: "/#" },
];

export default function DoctorsSection() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center animate__animated animate__fadeInUp">
                    <h5 className="section-title bg-white text-center text-primary fw-bold px-3">
                        Doctors
                    </h5>
                    <h1 className="fw-bold mb-5">Our Qualified Doctors</h1>
                </div>

                <div
                    className="overflow-auto py-2"
                    style={{
                        overflowY: "hidden",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <div
                        className="d-flex flex-nowrap gap-4 pb-3"
                        style={{
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {doctors.map((doctor, index) => (
                            <div
                                className="flex-shrink-0 animate__animated animate__fadeInUp"
                                style={{
                                    width: "23%",
                                    maxWidth: "300px",
                                    minWidth: "250px",
                                }}
                                key={index}
                            >
                                <div className="team-item rounded shadow-sm p-3 h-100 bg-white text-center transition-hover border">
                                    <div className="overflow-hidden rounded">
                                        <img className="img-fluid" src={doctor.image} alt={doctor.name} />
                                    </div>

                                    <div className="position-relative d-flex justify-content-center my-3">
                                        {socialPlatforms.map(({ iconClass, href }, i) => (
                                            <Link key={i} to={href} className="btn btn-square btn-outline-primary mx-1">
                                                <i className={iconClass} />
                                            </Link>
                                        ))}
                                    </div>
                                    <h5 className="mb-0 text-primary">{doctor.name}</h5>
                                    <small className="text-muted">{doctor.role}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
