import React from "react";
import Image from "next/image";
import btnleft from "../public/btn-arrow-left.png";
import btnright from "../public/btn-arrow-right.png";
import girlflow from "../public/girlflow.png";

const PeopleSays = () => {
  return (
    <div className="h-fit py-20 px-5 md:px-20 ">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end">
        <h1 className="font-headfont text-white text-5xl leading-snug">
          An enterprise template to ramp
          <br />
          up your company website
        </h1>
        <div className="flex gap-6 px-5">
          <button className="w-14 h-14 bg-white rounded-full">
            <Image className="inline-block" src={btnleft} alt="btnleft" />
          </button>
          <button className="w-14 h-14 bg-white rounded-full">
            <Image className="inline-block" src={btnright} alt="btn-right" />
          </button>
        </div>
      </div>
      <div className="flex text-center mt-20 gap-2 justify-evenly flex-col items-center lg:flex-row">
        <div className="bg-white w-fit h-fit px-8 py-14 rounded-xl">
          <h1 className="font-navfont text-3xl text-pretty md:text-nowrap">
            “Buyer buzz partner
            <br />
            network disruptive non-
            <br />
            disclosure agreement
            <br />
            business”
          </h1>
          <div className="flex mt-8 gap-2 items-center justify-center">
            <Image src={girlflow} alt="girlflow" />
            <div className="text-left">
              <h1 className="font-bold">Albus Dumbledore</h1>
              <p>Manager @ Howarts</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-fit h-fit px-8 py-14 rounded-xl">
          <h1 className="font-navfont text-3xl text-pretty md:text-nowrap">
            “Learning curve
            <br />
            infrastructure value
            <br />
            proposition advisor
            <br /> strategy user
            <br /> experience hypotheses
            <br /> investor.”
          </h1>
          <div className="flex mt-8 gap-2 items-center justify-center">
            <Image src={girlflow} alt="girlflow" />
            <div className="text-left">
              <h1 className="font-bold">Severus Snape</h1>
              <p>Manager @ Slytherin</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-fit h-fit px-8 py-14 rounded-xl">
          <h1 className="font-navfont text-3xl text-pretty md:text-nowrap">
            “Release facebook
            <br />
            responsive web design
            <br />
            business model canvas
            <br />
            seed money
            <br />
            monetization.”
          </h1>
          <div className="flex mt-8 gap-2 items-center justify-center">
            <Image src={girlflow} alt="girlflow" />
            <div className="text-left">
              <h1 className="font-bold">Harry Potter</h1>
              <p>Team Leader @ Gryffindor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleSays;
