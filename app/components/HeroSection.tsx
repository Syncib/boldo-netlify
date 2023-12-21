import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section h-fit relative overflow-hidden">
        <NavBar />
        <Intro />
        <div className="hero-circle absolute top-0 right-0 -z-10 rounded-bl-full"></div>
      </div>
    </>
  );
};

export default HeroSection;
