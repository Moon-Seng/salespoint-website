"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import Container from "../components/Container";

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const logos = containerRef.current.querySelectorAll("svg");

      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );

      logos.forEach((logo) => {
        logo.addEventListener("mouseenter", () =>
          gsap.to(logo, { scale: 1.2, duration: 0.3 })
        );
        logo.addEventListener("mouseleave", () =>
          gsap.to(logo, { scale: 1, duration: 0.3 })
        );
      });
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60"
        >
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto cursor-pointer"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Google
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto cursor-pointer"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Microsoft
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto cursor-pointer"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Amazon
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto cursor-pointer"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Netflix
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto cursor-pointer"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Spotify
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto cursor-pointer"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Airbnb
              </text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
