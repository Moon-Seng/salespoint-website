import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import Features from "./sections/Features";
import WhyChooseUs from "./sections/WhyChooseUs";
import FeatureCards from "./sections/FeatureCards";
import AppPreview from "./sections/AppPreview";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Security from "./sections/Security";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Security />
      <WhyChooseUs />
      <FeatureCards />
      <AppPreview />
      <Stats />
      {/* <Testimonials /> */}
      <Pricing />
      <Footer />
    </div>
  );
}
