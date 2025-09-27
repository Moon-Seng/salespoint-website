"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";
import TestimonialCard from "../components/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    name: "Jenny Wilson",
    quote:
      "I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.",
    title: "Project Manager at Microsoft",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Robert Fox",
    quote:
      "I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content",
    title: "Founder at Brain.co",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Kristin Watson",
    quote:
      "Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.",
    title: "UX Designer at Google",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
      
      // Cards animation
      gsap.fromTo(cardsRef.current,
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
    <section ref={sectionRef} className="py-20 bg-white">
      <Container>
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-space-grotesk mb-6">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto w-[80%] font-inter">
            Quisque fermentum porta tincidunt. Interdum semper. Pellentesque
            facilisis augue mollis suscipit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} ref={(el) => el && (cardsRef.current[index] = el)}>
              <TestimonialCard
                {...testimonial}
                isMiddle={index === 1}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
