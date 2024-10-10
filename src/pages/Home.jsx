import React from "react";
import { Navbar, Hero, Car, Footer } from "../components/index";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F7CC1E_100%)]">
        <Navbar />
        <Hero />
        <VelocityScroll
          text="Real Estate & Design Solutions"
          default_velocity={5}
          className="font-display text-center text-sm font-bold tracking-[-0.02em] text-black bg-amber-50 drop-shadow-sm dark:text-white md:text-6xl md:leading-[4.5rem]"
        />
        <div className="flex flex-col bg-amber-50 drop-shadow-sm justify-center pt-11 pb-20 items-center">
          <Car />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
