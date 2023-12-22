import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import ConnectCustomers from "./ConnectCustomers";
import PeopleSays from "./PeopleSays";
import Blog from "./Blog";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
      <PeopleSays />
      <ConnectCustomers />
      <Blog />
    </div>
  );
};

export default HomePage;
