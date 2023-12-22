import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import ConnectCustomers from "./ConnectCustomers";
import PeopleSays from "./PeopleSays";
import Blog from "./Blog";
import EmailForm from "./EmailForm";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
      <PeopleSays />
      <ConnectCustomers />
      <Blog />
      <EmailForm />
      <Footer/>
    </div>
  );
};

export default HomePage;
