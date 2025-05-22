import React from 'react';
import 'animate.css';

export default function HeroSection({ title }) {
    return (
        <div
            className="container-fluid position-relative text-white d-flex align-items-center"
            style={{
                height: '500px',
                backgroundImage: "url('/assets/img-1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            ></div>

            {/* Hero Content */}
            <div className="container position-relative z-2">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
                            {title}
                        </h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/" className="text-white text-decoration-none">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item active text-white" aria-current="page">
                                    {title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
