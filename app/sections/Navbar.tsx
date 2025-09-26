"use client";
import { useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import LetterLogo from "../components/LetterLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <Container className="relative flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <LetterLogo />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Home
          </a>
          <a
            href="#pages"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Pages
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Pricing
          </a>
          <a
            href="#portfolio"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Contact
          </a>
          <Button>Get Started Free</Button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50">
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </a>
              <a
                href="#pages"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Pages
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Pricing
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Portfolio
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Contact
              </a>
              <Button>Get Started Free</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
