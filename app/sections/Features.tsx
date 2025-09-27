"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import AnalyticsIcon from "../assets/Icon/Analytics";
import Container from "../components/Container";
import FeatureCard from "../components/FeatureCard";
import features from "../data/features";

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <Container>
        <div ref={headerRef} className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-space-grotesk mb-4 md:mb-6 px-4">
            How To Grow Your Business
          </h2>
          <p className="text-sm md:text-md text-gray-600 max-w-2xl mx-auto font-inter px-4">
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16 px-4 md:px-0"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index + feature.title} feature={feature} />
          ))}
        </div>

        <div ref={statsRef} className="text-center">
          <p className="text-gray-600 font-inter flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-4">
            Approx
            <span className="text-xl md:text-2xl font-bold text-primary">
              875 +
            </span>
            team members ready to online support for you
          </p>
        </div>
      </Container>
    </section>
  );
}
