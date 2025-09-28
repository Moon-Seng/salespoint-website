"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import CheckIcon from "./CheckIcon";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  name: string;
  limitation: string;
}

interface PricingCardProps {
  id: number;
  name: string;
  price: string;
  yearly_price: string;
  is_popular: boolean;
  features: Feature[];
  description: string;
  isAnnual: boolean;
}

export default function PricingCard({
  id,
  name,
  price,
  yearly_price,
  is_popular,
  features,
  description,
  isAnnual,
}: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const displayPrice = isAnnual ? yearly_price : price;
  const period = isAnnual ? "year" : "month";

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play pause restart pause"
        }}
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-2xl p-6 ${
        is_popular ? "border-2 border-primary" : "border border-gray-200"
      }`}
      style={{ boxShadow: "0 4.325px 64.871px 0 rgba(0, 0, 0, 0.08)" }}
    >
      {is_popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-space-grotesk">
          {name.toUpperCase()}
        </h3>
        <div className="mb-4">
          <span className="text-sm text-gray-500">MMK</span>
          <span className="text-3xl font-bold text-gray-900 mx-1">
            {parseFloat(displayPrice).toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">/ {period}</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">INCLUDED</h4>

        <div
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <Button
        // onClick={() => window.location.href = `https://app.salespoint.com.mm/register?plan=${id}`}
        className="w-full bg-primary cursor-pointer text-white hover:bg-primary-hover"
      >
        Sign Up
      </Button>
    </div>
  );
}
