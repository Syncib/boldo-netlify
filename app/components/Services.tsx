import React from "react";
import Image from "next/image";
import greenman from "../../public/greenman.png";
import coolman from "../../public/coolman.png";
import buildman from "../../public/buildman.png";
import arrowright from "../../public/arrow-right.png";
import mancall from "../../public/mancall.png";
import girlcall from "../../public/girlcall.png";
import juneincome from "../../public/juneincome.png";
import checkcir from "../../public/checkcir.png";
import feather from "../../public/feather.png";
import eye from "../../public/eye.png";
import sun from "../../public/sun.png";
import piechart from "../../public/piechart.png";

const Services = () => {
  return (
    <div className="bg-white h-fit py-10 px-5 md:px-20">
      <div className="text-center py-12">
        <h1 className="font-navfont text-gray-500 text-xl">Our Services</h1>
        <h2 className="font-headfont text-5xl hidden lg:block">
          Handshake infographic mass market
          <br /> crowdfunding iteration.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2 justify-evenly">
        <div>
          <Image src={greenman} alt="greenman" />
          <div className="font-navfont">
            <h2 className="py-5 text-xl">Cool feature title</h2>
            <p className="text-gray-400">
              Learning curve network effects
              <br />
              return on investment.
            </p>
            <p className="py-4">
              <span className="font-bold border-b border-black gap-3 py-2">
                Explore page
                <Image
                  className="inline-block"
                  src={arrowright}
                  alt="arrow-right"
                />
              </span>
            </p>
          </div>
        </div>
        <div>
          <Image src={coolman} alt="coolman" />
          <div className="font-navfont">
            <h2 className="py-5 text-xl">Even cooler feature</h2>
            <p className="text-gray-400">
              Learning curve network effects
              <br />
              return on investment.
            </p>
            <p className="py-4">
              <span className="font-bold border-b border-black gap-3 py-2">
                Explore page
                <Image
                  className="inline-block"
                  src={arrowright}
                  alt="arrow-right"
                />
              </span>
            </p>
          </div>
        </div>
        <div>
          <Image src={buildman} alt="buildman" />
          <div className="font-navfont">
            <h2 className="py-5 text-xl">Cool feature title</h2>
            <p className="text-gray-400">
              Learning curve network effects
              <br />
              return on investment.
            </p>
            <p className="py-4">
              <span className="font-bold border-b border-black gap-3 py-2">
                Explore page
                <Image
                  className="inline-block"
                  src={arrowright}
                  alt="arrow-right"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-12 lg:py-28 md:px-20">
        <div className="relative">
          <Image className=" min-w-60" src={mancall} alt="mancall" />
          <Image
            className="lg:absolute z-10 right-8 top-56"
            src={juneincome}
            alt="juneincome"
          />
        </div>
        <div className="py-3 px-8">
          <h1 className="font-headfont text-center md:text-left text-4xl py-4">
            We connect our customers
            <br />
            with the best, and help them
            <br />
            keep up-and stay open.
          </h1>
          <div className="flex flex-col gap-5 py-5">
            <p className="flex gap-5 items-center">
              <Image className="min-w-6 w-6" src={checkcir} alt="checkcir" />
              <span className="font-navfont">
                We connect our customers with the best.
              </span>
            </p>
            <p className="flex gap-5 items-center">
              <Image className="min-w-6 w-6" src={checkcir} alt="checkcir" />
              <span className="font-navfont">
                Advisor success customer launch party.
              </span>
            </p>
            <p className="flex gap-5 items-center">
              <Image className="min-w-6 w-6" src={checkcir} alt="checkcir" />
              <span className="font-navfont">
                Business-to-consumer long tail.
              </span>
            </p>
          </div>
          <div className="text-center md:text-left my-2">
            <button className="text-white bg-blue-950 px-8 py-3 rounded-full">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-12 lg:py-28 md:px-20">
        <div className="py-3 px-8">
          <h1 className="font-headfont text-center md:text-left text-4xl py-4">
            We connect our customers
            <br />
            with the best, and help them
            <br />
            keep up-and stay open.
          </h1>
          <div className="flex flex-col gap-5 py-5">
            <p className="flex gap-5 items-center p-5 bg-blue-950 text-white rounded shadow-lg">
              <Image className="min-w-6 w-7" src={feather} alt="checkcir" />
              <span className="font-navfont">
                We connect our customers with the best.
              </span>
            </p>
            <p className="flex gap-5 items-center p-5 rounded shadow-lg">
              <Image className="min-w-6 w-7" src={eye} alt="checkcir" />
              <span className="font-navfont">
                Advisor success customer launch party.
              </span>
            </p>
            <p className="flex gap-5 items-center p-5 rounded shadow-lg">
              <Image className="min-w-6 w-7" src={sun} alt="checkcir" />
              <span className="font-navfont">
                Business-to-consumer long tail.
              </span>
            </p>
          </div>
        </div>
        <div className="relative">
          <Image className=" min-w-60" src={girlcall} alt="girlcall" />
          <Image
            className="lg:absolute z-10 left-8 top-56"
            src={piechart}
            alt="piechart"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
