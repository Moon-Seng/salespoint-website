"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";

gsap.registerPlugin(ScrollTrigger);

export default function AppPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftContentRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );

      // Right content animation
      gsap.fromTo(
        rightContentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 70%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftContentRef}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-space-grotesk mb-6">
              Ready To Use Our App
              <br />
              With No Hidden Malware
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus
              velit quis. Nunc mollis venenatis metus nec aliquet.
            </p>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <p className="text-gray-600 font-inter">
              Already a member?{" "}
              <span className="text-primary cursor-pointer">Sign In</span>
            </p>
          </div>

          <div ref={rightContentRef} className="relative">
            <div className="relative bg-primary rounded-full w-96 h-96 mx-auto">
              <svg
                className="absolute top-0 right-0 w-32 h-32 text-yellow-400"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20 50 Q 50 20, 80 50 Q 50 80, 20 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <div
                ref={(el) => el && (cardsRef.current[0] = el)}
                className="absolute top-8 right-8 bg-white rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-2-2 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Time Duration</span>
                </div>
                <div className="text-2xl font-bold">
                  1.46<span className="text-sm">h</span>
                </div>
              </div>

              <div
                ref={(el) => el && (cardsRef.current[1] = el)}
                className="absolute top-1/2 left-4 bg-white rounded-lg p-4 shadow-lg"
              >
                <div className="w-32 h-20 bg-gray-100 rounded mb-2 relative">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 50"
                  >
                    <polyline
                      points="10,40 30,20 50,30 70,10 90,25"
                      stroke="#4ca456"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="text-xs text-gray-600">10AM</div>
              </div>

              <div
                ref={(el) => el && (cardsRef.current[2] = el)}
                className="absolute bottom-8 left-8 bg-white rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Task Completed</span>
                </div>
                <div className="text-2xl font-bold">12</div>
              </div>

              <div
                ref={(el) => el && (cardsRef.current[3] = el)}
                className="absolute top-1/3 right-4 bg-white rounded-lg p-3 shadow-lg"
              >
                <div className="text-sm font-medium mb-2">
                  Scheduled time for work
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Design Homepage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs">Sketsa Ilustrasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs">Onboarding Design</span>
                  </div>
                </div>
              </div>

              <svg
                className="absolute bottom-0 left-0 w-32 h-32 text-yellow-400"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M80 50 Q 50 80, 20 50 Q 50 20, 80 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
