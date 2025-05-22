import React from "react";

export default function FaqSection() {
    return (
        <section className="py-5" id="faq">
            <div className="container">
                <div className="text-center animate__animated animate__fadeInUp">
                    <h5 className=" section-title bg-white text-center text-primary fw-bold px-3">
                        FAQ
                    </h5>
                    <h1 className="fw-bold mb-5">Frequently Asked Questions</h1>
                </div>

                <div className="accordion" id="faqAccordion">
                    {/* FAQ 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faqCollapse1"
                                aria-expanded="true"
                                aria-controls="faqCollapse1"
                            >
                                What services are included in a dental session?
                            </button>
                        </h2>
                        <div
                            id="faqCollapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faq1"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Each session includes consultation, diagnosis, and the selected
                                treatments.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faqCollapse2"
                                aria-expanded="false"
                                aria-controls="faqCollapse2"
                            >
                                Do you accept insurance?
                            </button>
                        </h2>
                        <div
                            id="faqCollapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq2"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes, we accept most major insurance providers.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faqCollapse3"
                                aria-expanded="false"
                                aria-controls="faqCollapse3"
                            >
                                How long does a whitening session take?
                            </button>
                        </h2>
                        <div
                            id="faqCollapse3"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq3"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Usually between 30 to 60 minutes.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faqCollapse4"
                                aria-expanded="false"
                                aria-controls="faqCollapse4"
                            >
                                Can I reschedule an appointment?
                            </button>
                        </h2>
                        <div
                            id="faqCollapse4"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq4"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes, appointments can be rescheduled 24 hours in advance.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
