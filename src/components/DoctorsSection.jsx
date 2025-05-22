import React from "react";

const doctors = [
    {
        name: "Rick Steves",
        role: "Travel Writer",
        image: "assets/doc-1.jpg",
    },
    {
        name: "Samantha Brown",
        role: "Travel Host",
        image: "assets/doc-2.jpg",
    },
    {
        name: "Steve Irwin",
        role: "Wildlife Expert",
        image: "assets/doc-3.jpg",
    },
    {
        name: "Megan McKenna",
        role: "Blogger",
        image: "assets/doc-4.jpg",
    },
    {
        name: "Rick Steves",
        role: "Travel Writer",
        image: "assets/doc-5.jpg",
    },
    {
        name: "Samantha Brown",
        role: "Travel Host",
        image: "assets/doc-6.jpg",
    },
    {
        name: "Steve Irwin",
        role: "Wildlife Expert",
        image: "assets/doc-7.jpg",
    },
    {
        name: "Megan McKenna",
        role: "Blogger",
        image: "assets/doc-8.jpg",
    },
];


export default function DoctorsSection() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center animate__animated animate__fadeInUp">
                    <h5 className=" section-title bg-white text-center text-primary fw-bold px-3">
                        Doctors
                    </h5>
                    <h1 className="fw-bold mb-5">Our Qualified Doctors</h1>
                </div>

                <div
                    className="overflow-auto py-2"
                    style={{
                        overflowY: "hidden",
                        scrollbarWidth: "none",        // Firefox
                        msOverflowStyle: "none",       // IE/Edge
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
                                    width: "100%",
                                    maxWidth: "300px",
                                }}
                                key={index}
                            >
                                <div className="team-item rounded shadow-sm p-3 h-100 bg-white text-center transition-hover">
                                    <div className="overflow-hidden rounded">
                                        <img
                                            className="img-fluid"
                                            src={doctor.image}
                                            alt={doctor.name}
                                        />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center my-3">
                                        <a
                                            className="btn btn-square btn-outline-primary mx-1"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary mx-1"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary mx-1"
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                    <h5 className="mb-0 text-primary">{doctor.name}</h5>
                                    <small className="text-muted">{doctor.role}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>
                    {`
            .overflow-auto::-webkit-scrollbar {
              display: none;
            }
          `}
                </style>
            </div>
        </div>
    );
};