import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import OurNumbers from "@/components/OurNumbers";
import OurStory from "@/components/OurStory";
import OurTeam from "@/components/OurTeam";
import OurValues from "@/components/OurValues";
import React from "react";

const about = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="text-center pt-12 pb-60">
        <h1 className="font-navfont text-gray-300 text-xl">About</h1>
        <h2 className="font-headfont text-5xl text-white my-6 leading-snug">
          We love to make great
          <br />
          things, things that matter.
        </h2>
        <p className="text-gray-300 font-navfont">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage
          <br />
          innovator success deployment non-disclosure.
        </p>
      </div>
      <OurStory />
      <OurNumbers />
      <OurTeam />
      <OurValues />
      <EmailForm />
      <Footer />
    </div>
  );
};

export default about;
