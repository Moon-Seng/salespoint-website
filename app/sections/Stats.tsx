"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }}
      );
      
      // Stats animation
      gsap.fromTo(statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }}
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <Container>
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-space-grotesk mb-6">
            We Help To Grow Your Business
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-inter">
            Quisque fermentum porta tincidunt. Interdum semper. Pellentesque
            facilisis augue dolor mollis suscipit erat libero fermentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div ref={(el) => el && (statsRef.current[0] = el)} className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk mb-2">
              142
            </div>
            <div className="text-blue-100 font-plus-jakarta-sans">
              New Features
            </div>
          </div>

          <div ref={(el) => el && (statsRef.current[1] = el)} className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk mb-2">
              28k
            </div>
            <div className="text-blue-100 font-plus-jakarta-sans">
              APP Download
            </div>
          </div>

          <div ref={(el) => el && (statsRef.current[2] = el)} className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk mb-2">
              53M
            </div>
            <div className="text-blue-100 font-plus-jakarta-sans">
              Active Users
            </div>
          </div>

          <div ref={(el) => el && (statsRef.current[3] = el)} className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk mb-2">
              90%
            </div>
            <div className="text-blue-100 font-plus-jakarta-sans">
              Positive Rate
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
