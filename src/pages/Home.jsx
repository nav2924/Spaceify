import React from "react";
import { Navbar, Hero } from "../components/index";

const Home = () => {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F7CC1E_100%)]">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
