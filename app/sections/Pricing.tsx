"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/Container";
import PricingCard from "../components/PricingCard";
import config from "../../lib/config";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  name: string;
  limitation: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  yearly_price: string;
  is_popular: boolean;
  features: Feature[];
  description: string;
}

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isAnnual, setIsAnnual] = useState(true);
  const [pricingData, setPricingData] = useState<PricingPlan[]>([]);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch(
          `${config.API_BASE_URL}${config.endpoints.pricing}`
        );
        const data = await response.json();
        setPricingData(data);
      } catch (error) {
        console.error("Failed to fetch pricing data:", error);
        const mockData: PricingPlan[] = [
          {
            id: 4,
            name: "Scales",
            price: "80000.00",
            yearly_price: "960000.00",
            is_popular: true,
            features: [
              { name: "Orders Limitation", limitation: "Unlimited" },
              { name: "Products Limitation", limitation: "Unlimited" },
              { name: "Admin Limitation", limitation: "50" },
              { name: "Employee Limitation", limitation: "50" },
            ],
            description: "For growing businesses",
          },
        ];
        setPricingData(mockData);
      }
    };

    fetchPricingData();
  }, [isAnnual]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        toggleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: toggleRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <Container>
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-space-grotesk mb-4">
            Choose the plan that
            <br />
            fits you best
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Perfect for growing businesses
          </p>
        </div>

        <div ref={toggleRef} className="flex items-center justify-center mb-12">
          <span
            className={`mr-4 ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}
          >
            MONTHLY
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAnnual ? "bg-primary" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`ml-4 ${isAnnual ? "text-gray-900" : "text-gray-500"}`}
          >
            ANNUALLY
          </span>
          {isAnnual && (
            <span className="ml-2 text-sm text-primary font-medium">
              20% off
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={plan.id}
              ref={(el) => el && (cardsRef.current[index] = el)}
            >
              <PricingCard {...plan} isAnnual={isAnnual} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
