import React from "react";

const Services = () => {
  return (
    <div className="bg-white h-fit py-10 px-5 md:px-20">
      <div className="text-center py-12">
        <h1 className="font-navfont text-gray-500">Our Services</h1>
        <h2 className="font-headfont text-5xl hidden lg:block">
          Handshake infographic mass market
          <br /> crowdfunding iteration.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2 justify-evenly">
        <div>
          <img src="greenman.png" alt="greenman" />
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
                <img
                  className="inline-block"
                  src="arrow-right.png"
                  alt="arrow-right"
                />
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src="coolman.png" alt="coolman" />
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
                <img
                  className="inline-block"
                  src="arrow-right.png"
                  alt="arrow-right"
                />
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src="buildman.png" alt="buildman" />
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
                <img
                  className="inline-block"
                  src="arrow-right.png"
                  alt="arrow-right"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-12 lg:py-28 md:px-20">
        <div className="relative">
          <img className=" min-w-60" src="mancall.png" alt="mancall" />
          <img
            className="lg:absolute z-10 right-8 top-56"
            src="juneincome.png"
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
              <img className="min-w-6 w-7" src="checkcir.png" alt="checkcir" />
              <span className="font-navfont">
                We connect our customers with the best.
              </span>
            </p>
            <p className="flex gap-5 items-center">
              <img className="min-w-6 w-7" src="checkcir.png" alt="checkcir" />
              <span className="font-navfont">
                Advisor success customer launch party.
              </span>
            </p>
            <p className="flex gap-5 items-center">
              <img className="min-w-6 w-7" src="checkcir.png" alt="checkcir" />
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
              <img className="min-w-6 w-7" src="feather.png" alt="checkcir" />
              <span className="font-navfont">
                We connect our customers with the best.
              </span>
            </p>
            <p className="flex gap-5 items-center p-5 rounded shadow-lg">
              <img className="min-w-6 w-7" src="eye.png" alt="checkcir" />
              <span className="font-navfont">
                Advisor success customer launch party.
              </span>
            </p>
            <p className="flex gap-5 items-center p-5 rounded shadow-lg">
              <img className="min-w-6 w-7" src="sun.png" alt="checkcir" />
              <span className="font-navfont">
                Business-to-consumer long tail.
              </span>
            </p>
          </div>
        </div>
        <div className="relative">
          <img className=" min-w-60" src="girlcall.png" alt="girlcall" />
          <img
            className="lg:absolute z-10 left-8 top-56"
            src="piechart.png"
            alt="piechart"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
