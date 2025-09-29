"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "../components/Container";
import Button from "../components/Button";
import LetterLogo from "../components/LetterLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white shadow-sm transition-transform duration-300 z-50 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <Container className="relative flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <LetterLogo />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href={isHomePage ? "#home" : "/"}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Home
          </Link>
          <Link
            href={isHomePage ? "#pages" : "/#pages"}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Pages
          </Link>
          <Link
            href={isHomePage ? "#pricing" : "/#pricing"}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Pricing
          </Link>
          <Link
            href={isHomePage ? "#portfolio" : "/#portfolio"}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Portfolio
          </Link>
          <Link
            href={isHomePage ? "#blog" : "/#blog"}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Blog
          </Link>
          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Contact
          </Link>
          <Link
            href="/help"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Help
          </Link>
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
              <Link
                href={isHomePage ? "#home" : "/"}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              <Link
                href={isHomePage ? "#pages" : "/#pages"}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Pages
              </Link>
              <Link
                href={isHomePage ? "#pricing" : "/#pricing"}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Pricing
              </Link>
              <Link
                href={isHomePage ? "#portfolio" : "/#portfolio"}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Portfolio
              </Link>
              <Link
                href={isHomePage ? "#blog" : "/#blog"}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Blog
              </Link>
              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Help
              </Link>
              <Button>Get Started Free</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
