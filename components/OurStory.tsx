import React from "react";
import Image from "next/image";
import aboutmancall from "../public/aboutmancall.png";
import aboutgirlcall from "../public/aboutgirlcall.png";
import aboutgreen from "../public/aboutgreen.png";
import aboutcard from "../public/aboutcard.png";
import blackman from "../public/aboutblack.png";
const OurStory = () => {
  return (
    <div className="bg-white h-fit py-10 px-5 md:px-20 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 relative -top-36">
        <Image
          className="col-span-1 justify-self-end"
          src={aboutmancall}
          alt="aboutmancall"
        />
        <Image
          className="row-span-2 justify-self-center self-center hidden md:block"
          src={aboutgirlcall}
          alt="aboutmancall"
        />
        <Image
          className="col-span-1 justify-self-start"
          src={aboutgreen}
          alt="aboutgreen"
        />
        <Image
          className="col-span-1 justify-self-end self-end"
          src={aboutcard}
          alt="aboutmancall"
        />
        <Image
          className="col-span-1 justify-self-start self-end"
          src={blackman}
          alt="aboutmancall"
        />
      </div>
      <div className="md:py-12 flex justify-center">
        <div>
          <h1 className="font-navfont text-gray-400 text-xl">Our Story</h1>
          <h2 className="font-headfont text-5xl text-black my-2 leading-snug">
            Handshake infographic mass market
            <br />
            crowdfunding iteration.
          </h2>
          <p className="text-gray-400 font-navfont text-pretty my-4">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake
            <br />
            infographic mass market crowdfunding iteration. Traction stock user
            experience
            <br />
            deployment beta innovator incubator focus. Sales user experience
            branding growth <br />
            hacking holy grail monetization conversion prototype stock network
            effects. Learning
            <br />
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
