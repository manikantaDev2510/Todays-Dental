import React from "react";
import { IntroSection } from "../components/IntroSection";
import DoctorsSection from "../components/DoctorsSection";
import HeroSection from "../components/HeroSection";
import TabbedSection from "../components/TabbedSection";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function About() {
  return (
    <div>
      <FadeInOnScroll>
        <HeroSection title="About Us" />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <IntroSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <TabbedSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <DoctorsSection />
      </FadeInOnScroll>
    </div>
  );
}
