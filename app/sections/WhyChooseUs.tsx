"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );

      // Circle animation
      gsap.fromTo(
        circleRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: circleRef.current,
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
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-white">
      <Container>
        <div
          ref={titleRef}
          className="text-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-0"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-space-grotesk mb-4 md:mb-6">
            Why Will You Choose Our
            <br />
            Application
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-inter">
            Class aptent taciti sociosqu ad litora torquen conubia nostramae
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>
        </div>

        <div
          ref={circleRef}
          className="active-member-circle relative flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] px-4 md:px-0"
        >
          {/* Central Circle */}
          <div className="relative w-full max-w-[320px] h-fit flex items-center justify-center">
            <div className="relative">
              {/* Outer dashed circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-dashed border-gray-300 opacity-50"></div>

              {/* Inner dashed circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border-2 border-dashed border-gray-400 opacity-60"></div>

              <svg
                className="w-48 md:w-56 lg:w-60 h-48 md:h-56 lg:h-60"
                viewBox="0 0 320 320"
              >
                {/* Main progress circle background */}
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="#4ca456"
                  strokeWidth="8"
                  strokeDasharray="879"
                  strokeDashoffset="220"
                  strokeLinecap="round"
                  className="rotate-[-90deg] origin-center"
                />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    75%
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Active Members
                  </div>
                </div>
              </div>
              <div className="flex absolute z-10 -top-3 md:-top-5 left-0 transform -translate-x-1/2 items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="User"
                  className="w-10 md:w-12 lg:w-15 h-10 md:h-12 lg:h-15 rounded-full"
                />
              </div>

              <div className="flex absolute z-10 top-6 md:top-8 lg:top-10 -right-8 md:-right-12 lg:-right-45 transform -translate-x-1/2 items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                  alt="User"
                  className="w-10 md:w-12 lg:w-15 h-10 md:h-12 lg:h-15 rounded-full"
                />
              </div>

              <div className="hidden md:flex absolute z-10 -bottom-8 md:-bottom-12 lg:-bottom-40 left-3 md:left-4 lg:left-5 transform -translate-x-1/2 items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="User"
                  className="w-10 md:w-12 lg:w-15 h-10 md:h-12 lg:h-15 rounded-full"
                />
              </div>

              <div
                ref={(el) => el && (cardsRef.current[0] = el)}
                className="hidden md:flex absolute z-10 -top-8 md:-top-12 lg:-top-35 -right-16 md:-right-24 lg:-right-80 items-center"
              >
                <div
                  className="bg-white opacity-100 rounded-lg p-3 md:p-4 lg:p-8 max-w-[200px] md:max-w-xs mr-2 md:mr-3 flex items-center justify-start"
                  style={{
                    boxShadow: "0 4.258px 63.872px 0 rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="mr-2 md:mr-3 flex-shrink-0 mb-2 md:mb-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.6099"
                        cy="12.3396"
                        r="12.0286"
                        fill="#26CF8E"
                      />
                      <path
                        d="M8.02286 17.4965C7.86412 17.4962 7.71279 17.4293 7.60579 17.312C7.49683 17.1957 7.44268 17.0384 7.45696 16.8797L7.59561 15.3552L14.0004 8.9526L16.002 10.9536L9.59888 17.3556L8.07436 17.4942C8.05681 17.4959 8.03927 17.4965 8.02286 17.4965ZM16.4015 10.5535L14.4005 8.55252L15.6008 7.35225C15.7069 7.24599 15.851 7.18628 16.0011 7.18628C16.1513 7.18628 16.2954 7.24599 16.4015 7.35225L17.6018 8.55252C17.708 8.65866 17.7678 8.80269 17.7678 8.95289C17.7678 9.10308 17.708 9.24711 17.6018 9.35326L16.4021 10.553L16.4015 10.5535Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-start">
                      <p className="text-xs md:text-sm text-gray-600">
                        <span className="text-xs md:text-sm font-medium text-gray-900">
                          Karen
                        </span>{" "}
                        change project info on Project Homepage
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">June 03</p>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => el && (cardsRef.current[1] = el)}
                className="hidden md:flex absolute z-10 -bottom-8 md:-bottom-12 lg:-bottom-35 -right-12 md:-right-20 lg:-right-60 items-center"
              >
                <div
                  className="bg-white opacity-100 rounded-lg p-3 md:p-4 lg:p-8 max-w-[200px] md:max-w-xs mr-2 md:mr-3 flex items-center justify-start"
                  style={{
                    boxShadow: "0 4.258px 63.872px 0 rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="mr-2 md:mr-3 flex-shrink-0 mb-2 md:mb-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.0436"
                        cy="12.1148"
                        r="12.0286"
                        fill="#FABB18"
                      />
                      <path
                        d="M13.2127 6.86282C13.156 6.58498 12.9115 6.3855 12.628 6.3855H8.34397C8.01445 6.3855 7.74731 6.65263 7.74731 6.98215V15.932C7.74731 16.2615 8.01445 16.5287 8.34397 16.5287C8.6735 16.5287 8.94063 16.2615 8.94063 15.932V12.3521H12.2819L12.4251 13.0681C12.4792 13.3474 12.7253 13.5483 13.0098 13.5454H16.1005C16.43 13.5454 16.6972 13.2782 16.6972 12.9487V8.17547C16.6972 7.84594 16.43 7.57881 16.1005 7.57881H13.3559L13.2127 6.86282Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-start">
                      <p className="text-xs md:text-sm text-gray-600">
                        <span className="text-xs md:text-sm font-medium text-gray-900">
                          Andrea
                        </span>{" "}
                        change the due date of Project Homepage
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">June 03</p>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => el && (cardsRef.current[2] = el)}
                className="absolute z-10 -bottom-4 md:-bottom-8 lg:-bottom-15 -left-16 md:-left-24 lg:-left-80 flex items-center"
              >
                <div
                  className="bg-white opacity-100 rounded-lg p-3 md:p-4 lg:p-8 max-w-[200px] md:max-w-xs mr-2 md:mr-3 flex items-center justify-start"
                  style={{
                    boxShadow: "0 4.258px 63.872px 0 rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="mr-2 md:mr-3 flex-shrink-0 mb-2 md:mb-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.2117"
                        cy="12.0992"
                        r="12.0286"
                        fill="#D4767F"
                      />
                      <path
                        d="M7.19855 17.3952V8.23054C7.19855 7.59785 7.71144 7.08496 8.34413 7.08496H16.3632C16.9959 7.08496 17.5088 7.59785 17.5088 8.23054V13.9584C17.5088 14.5911 16.9959 15.104 16.3632 15.104H10.6353C10.3873 15.1036 10.146 15.184 9.94794 15.3331L7.19855 17.3952ZM8.34413 8.23054V15.104L9.56646 14.1876C9.76445 14.0382 10.0058 13.9578 10.2538 13.9584H16.3632V8.23054H8.34413Z"
                        fill="white"
                      />
                      <path
                        d="M7.77081 7.65796H16.9355V14.5314H9.29825L7.77081 16.0589V7.65796Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-start">
                      <p className="text-xs md:text-sm text-gray-600">
                        <span className="text-xs md:text-sm font-medium text-gray-900">
                          Karen
                        </span>{" "}
                        leave some comments on Ilustrasi
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">June 03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
