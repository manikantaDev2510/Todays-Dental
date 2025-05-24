import React from "react";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import FadeInOnScroll from "../components/FadeInOnScroll";
import PricingSection from "../components/PricingSection";

export default function Services() {
  return (
    <div>
      <FadeInOnScroll>
        <HeroSection title="Our Services" />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ServicesSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <PricingSection />
      </FadeInOnScroll>
    </div>
  );
}
