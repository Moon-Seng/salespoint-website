"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    const isOpening = openAccordion !== index;

    if (openAccordion !== null && accordionRefs.current[openAccordion]) {
      gsap.to(accordionRefs.current[openAccordion], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }

    setOpenAccordion(openAccordion === index ? null : index);

    if (isOpening && accordionRefs.current[index]) {
      gsap.fromTo(
        accordionRefs.current[index],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.inOut" }
      );
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // First section animations
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

      // Second section animations
      if (secondSectionRef.current) {
        gsap.fromTo(
          secondSectionRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: secondSectionRef.current,
              start: "top 80%",
              end: "bottom 10%",
              toggleActions: "play pause restart pause",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const accordionItems = [
    {
      title: "Custom Edit Tool Application",
      content:
        "Advanced editing tools with customizable interface and powerful features for enhanced productivity.",
    },
    {
      title: "Built In Safety Chat Mode Enabled",
      content:
        "Secure communication with end-to-end encryption and advanced safety protocols.",
    },
    {
      title: "Faster Trust Builds System Always Open",
      content:
        "Reliable system architecture designed for continuous operation and maximum uptime.",
    },
    {
      title: "Create Auto Layouts In App Interface",
      content:
        "Intelligent layout generation with responsive design and automatic optimization.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-16 lg:py-20 bg-white mt-10 md:mt-20 lg:mt-40"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[48%_55%] gap-8 md:gap-12 lg:gap-16 items-center">
          <div
            ref={leftContentRef}
            className="space-y-6 md:space-y-8 w-full px-4 md:px-0 lg:w-full"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-space-grotesk leading-tight">
              Better Security To Better Protection An Experience Of Strength.
            </h2>

            <p className="text-sm md:text-base text-gray-600 font-space-grotesk">
              Class aptent taciti sociosqu ad litora torquent conubia nostrama
              inceptos himenaeos. Donec tristique nibh ipsum dignissim.
            </p>

            <hr color="#D4D4D8" className="my-6 md:my-8" />

            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-space-grotesk">
                  Well Organised User Interface
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-space-grotesk">
                  Etiam id euismod odio. Ut euismod sem a lacus fringilla.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-space-grotesk">
                  Completely Bug Free
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-space-grotesk">
                  Cras eleifend leo ac varius tristique suspendisse.
                </p>
              </div>
            </div>
          </div>

          <div ref={rightContentRef} className="relative px-4 md:px-0">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 relative z-10">
              <h1 className="text-lg md:text-xl">Images Come Here</h1>
            </div>

            <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-16 md:w-24 h-16 md:h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 md:w-16 h-12 md:h-16 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>

        <div
          ref={secondSectionRef}
          className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 md:gap-12 lg:gap-16 items-center mt-20 md:mt-32 lg:mt-40"
        >
          <div className="relative order-2 lg:order-1 px-4 md:px-0">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl">Images Goes Here</h2>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-space-grotesk leading-tight">
              Performance Is The Key To Most People Achieving A Better Future
            </h2>

            <p className="text-sm md:text-base text-gray-600 font-inter">
              Etiam euismod odio euismod lacus fringilla hendrer.
            </p>

            <div className="space-y-0">
              {accordionItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between py-3 md:py-4 w-full text-left"
                  >
                    <span className="font-semibold text-gray-900 font-space-grotesk text-sm md:text-base pr-4">
                      {item.title}
                    </span>
                    <span className="text-blue-600 text-lg md:text-xl flex-shrink-0">
                      {openAccordion === index ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    ref={(el) => (accordionRefs.current[index] = el)}
                    className={`overflow-hidden ${
                      openAccordion === index ? "" : "h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-3 md:pb-4">
                      <p className="text-[#4F4F4F] text-sm md:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
