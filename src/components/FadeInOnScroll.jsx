import React, { useRef, useState, useEffect } from "react";

export default function FadeInOnScroll({ children, className = "", animation = "animate__fadeInUp" }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`animate__animated ${isVisible ? animation : ""} ${className}`}
        >
            {children}
        </div>
    );
}
