import React, { useState } from "react";
import ShineBorder from "./ui/shine-border";
import HyperText from "./ui/hyper-text";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-md h-64 overflow-hidden rounded-xl mx-auto bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F7CC1E_100%)]">
      {" "}
      {/* Set a max width and height */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        &#10095; {/* Right Arrow */}
      </button>
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

const Car = () => {
  const images = [
    {
      src: "/p1.jpg",
    },
    {
      src: "/p2.jpg",
    },
    {
      src: "/p3.jpg",
    },
    {
      src: "/p4.jpg",
    },
    {
      src: "/p5.jpg",
    },
  ];

  return (
    <ShineBorder
      className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-lg border bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F7CC1E_100%)] md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderRadius={2}
      borderWidth={10}
    >
      <div className="p-4">
        <HyperText
          className="text-2xl  font-bold mb-4 text-black dark:text-white "
          text="One of our fine examples"
          duration={160}
          animateOnLoad={true}
        />

        <Carousel images={images} />
      </div>
    </ShineBorder>
  );
};

export default Car;
