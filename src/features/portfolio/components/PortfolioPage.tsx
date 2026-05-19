"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { NAV_ITEMS } from "../data";
import { useCountUp, useCustomCursor, useMagneticElements, useRevealObserver } from "../hooks/usePortfolioEffects";
import { SiteChrome } from "./layout/SiteChrome";
import { GlobalFx } from "./shared/GlobalFx";
import { HeroSection } from "./sections/HeroSection";
import { WorkSection } from "./sections/WorkSection";
import { ServicesSection } from "./sections/ServicesSection";
import { AboutSection } from "./sections/AboutSection";
import { ProcessSection } from "./sections/ProcessSection";
import { StackSection } from "./sections/StackSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";

export function PortfolioPage() {
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  useRevealObserver();
  useCountUp();
  useCustomCursor(cursorDot, cursorRing);
  useMagneticElements();

  const bars = useMemo(() => Array.from({ length: 6 }).map(() => 25 + Math.round(Math.random() * 65)), []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      setScrolled(window.scrollY > 40);
      for (const section of sections) {
        if (mid >= section.offsetTop && mid < section.offsetTop + section.offsetHeight) {
          setActive(section.id);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <GlobalFx cursorDot={cursorDot} cursorRing={cursorRing} />
      <SiteChrome active={active} scrolled={scrolled} navItems={NAV_ITEMS} />
      <HeroSection bars={bars} />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ProcessSection />
      <StackSection />
      <ContactSection />
    </main>
  );
}
