import { Navbar, ContainerResponsive, Footer } from "@/components";
import React from "react";
import Ripple from "@/components/ui/ripple";

const Services = () => {
  return (
    <div className="bg-amber-50">
      <Navbar />
      <div className=" h-screen flex flex-col items-center justify-center">
        <div className="relative flex h-[350px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-amber-50 md:shadow-xl">
          <p className="z-10 absolute text-center text-5xl font-medium tracking-tighter racking-tighter bg-gradient-to-b from-black to-[#4B3F25] text-transparent bg-clip-text mt-6 ">
            Our Services
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <Ripple mainCircleOpacity={1} />
          </div>
        </div>
      </div>
      <ContainerResponsive />
    </div>
  );
};

export default Services;
