"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";
import CreativeFeaturesIcon from "../assets/Icon/CreativeFeatures";
import AwesomeDesignIcon from "../assets/Icon/AwesomeDesign";
import BestFeaturesIcon from "../assets/Icon/BestFeatures";
import EasySolutionIcon from "../assets/Icon/EasySolution";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: <CreativeFeaturesIcon />,
    color: "text-primary",
    title: "Creative Ideas",
    description: "Class aptent taciti sociq u litora torquen conub.",
  },
  {
    icon: <AwesomeDesignIcon />,
    color: "text-red-500",
    title: "Awesome Design",
    description: "Integer a elit pellentesqu e semper sem ultricies.",
  },
  {
    icon: <BestFeaturesIcon />,
    color: "text-orange-500",
    title: "Best Features",
    description: "Fusce risus lorem pulvin ar eu posuere vitae.",
  },
  {
    icon: <EasySolutionIcon />,
    color: "text-green-500",
    title: "Easy Solutions",
    description: "Aenean eget nulla eu dui malesuad convallis vel.",
  },
];

export default function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="text-center px-8 py-20 bg-white rounded-2xl"
              style={{ boxShadow: "0 4.325px 64.871px 0 rgba(0, 0, 0, 0.08)" }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-space-grotesk">
                {card.title}
              </h3>
              <p className="text-gray-600 font-inter">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
