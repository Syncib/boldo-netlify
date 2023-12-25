import React from "react";
import Image from "next/image";
import herograph from "../public/hero graphics.svg";
import logowall from "../public/logowall.png";
const Intro = () => {
  return (
    <div>
      <div className="px-5 md:px-20 pt-20 flex flex-col lg:flex-row justify-between items-center">
        <div className=" text-center lg:text-left">
          <h1 className="font-headfont text-white text-5xl">
            Save time by building
            <br />
            fast with Boldo Template
          </h1>
          <p className="text-white font-navfont mt-2">
            Funding handshake buyer business-to-business metrics iPad
            partnership.
            <br />
            First mover advantage innovator success deployment non-disclosure.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center font-navfont font-bold mt-6 lg:justify-normal">
            <button className="bg-green-300 px-12 py-4 rounded-full">
              Buy&nbsp;Template
            </button>
            <button className="px-12 py-4 rounded-full border-2 border-white text-white mx-6">
              Explore
            </button>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <Image className="backdrop-blur-md" src={herograph} alt="hero-svg" />
        </div>
      </div>
      <Image className="w-screen" src={logowall} alt="mylogowall" />
    </div>
  );
};

export default Intro;
