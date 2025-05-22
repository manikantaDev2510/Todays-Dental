// components/FadeInOnScroll.js
import { useEffect, useRef, useState } from 'react';

export default function FadeInOnScroll({ children, delay = '0s', animation = 'fadeInUp' }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // remove to animate only once
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`animate__animated ${isVisible ? `animate__${animation}` : ''}`}
            style={{ animationDelay: delay, opacity: isVisible ? 1 : 0 }}
        >
            {children}
        </div>
    );
}
