import React from "react";
import { Accordion, Container } from "react-bootstrap";

export default function FaqSection() {
    const faqs = [
        {
            question: "What services are included in a dental session?",
            answer: "Each session includes consultation, diagnosis, and the selected treatments.",
        },
        {
            question: "Do you accept insurance?",
            answer: "Yes, we accept most major insurance providers.",
        },
        {
            question: "How long does a whitening session take?",
            answer: "Usually between 30 to 60 minutes.",
        },
        {
            question: "Can I reschedule an appointment?",
            answer: "Yes, appointments can be rescheduled 24 hours in advance.",
        },
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h5 className="text-primary fw-bold">FAQ</h5>
                    <h1 className="fw-bold">Frequently Asked Questions</h1>
                </div>

                <Accordion defaultActiveKey="0">
                    {faqs.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body>{faq.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </section>
    );
}
