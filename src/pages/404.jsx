import React from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import 'animate.css';

export default function PageNotFound() {
    return (
        <FadeInOnScroll>
            <div className="d-flex p-5 flex-column align-items-center justify-content-center text-center">

                <i className="bi bi-emoji-frown display-1 text-primary animate__animated animate__bounce animate__slow animate__infinite mb-4"></i>

                <h1 className="display-4 text-primary">Oops! Page Not Found</h1>

                <p className="lead text-muted">
                    Sorry, the page you're looking for doesn't exist.
                    <br />
                    Maybe your smile led us in the wrong direction!
                </p>

                <a href="/" className="btn btn-outline-primary mt-3">
                    Go Back to Home
                </a>
            </div>
        </FadeInOnScroll>
    );
}
