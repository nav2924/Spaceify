import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const Hero = () => {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <div>
      <section className="pt-8 pb-20 md:pt-5 md:pb-10">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="md:flex items-center">
            <div className="md:w-[478px]">
              <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                Explore Opportunities in Real Estate
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#4B3F25] text-transparent bg-clip-text mt-6">
                Building Your Future in Design and Real Estate
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Join our innovative platform that offers exciting internships in
                civil and interior design while connecting you with the best
                opportunities in the real estate sector.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-text">Learn More</button>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <motion.img
                src="/real_estate.png"
                alt="Real Estate"
                className="md:absolute h-full md:w-auto md:max-w-none right-5 -translate-y-[30px]"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/home.png"
                alt="home"
                width={220}
                height={220}
                className="hidden md:block -top-6 left-8 md:absolute"
                style={{
                  translateY: translateY,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
