import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import { PeopleSays } from "./PeopleSays";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
      <PeopleSays />
    </div>
  );
};

export default HomePage;
