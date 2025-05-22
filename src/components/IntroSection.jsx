import React from "react";

export const IntroSection = () => {
    return (
        <section className="container my-5">
            <div className="text-center mb-5 animate__animated animate__fadeInDown">
                <h5 className=" section-title bg-white text-center text-primary fw-bold px-3" >
                    About
                </h5>
                <h1 className="fw-bold mb-3">Our Clinic</h1>
            </div>

            <div className="row align-items-center gx-5">
                {/* Left - Image */}
                <div className="col-md-6">
                    <img
                        src="assets/about.jpg"
                        alt="About Dentacare"
                        className="img-fluid rounded shadow animate__animated animate__slideInLeft"
                        style={{ objectFit: "cover", height: 450, width: "100%" }}
                    />
                </div>

                {/* Right - Text */}
                <div className="col-md-6">
                    <h2 className="fw-bold text-primary mb-4 animate__animated animate__slideInRight animate__faster">
                        Dentacare with a Personal Touch
                    </h2>
                    <p className="lead text-muted mb-5 animate__animated animate__slideInRight animate__fast">
                        A small river named Duden flows by their place and supplies it with
                        the necessary regelialia.
                    </p>
                    <ul className="list-unstyled animate__animated animate__slideInRight animate__slow">
                        {[
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
                        ].map(({ title, desc }, i) => (
                            <li className="d-flex mb-4" key={i}>
                                <div className="me-3 text-primary fs-4">✔</div>
                                <div>
                                    <h5 className="mb-1">{title}</h5>
                                    <p className="text-muted mb-0">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};