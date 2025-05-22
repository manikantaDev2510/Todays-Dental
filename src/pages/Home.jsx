import React from "react";
import CounterSection from "../components/CounterSection";
import ImageCarousel from "../components/ImageCarouselSection";
import ServicesSection from "../components/ServicesSection";
import DoctorsSection from "../components/DoctorsSection";
import FadeInOnScroll from "../components/FadeInOnScroll";
import FaqSection from "../components/FaqSection";
import IntroSection from "../components/IntroSection";

export default function Home() {
  return (
    <div>
      <FadeInOnScroll>
        <ImageCarousel />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <CounterSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <IntroSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ServicesSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <DoctorsSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <FaqSection />
      </FadeInOnScroll>
    </div>
  );
}