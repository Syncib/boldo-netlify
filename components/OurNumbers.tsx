import React from "react";

const OurNumbers = () => {
  return (
    <div>
      <div className="text-center py-20">
        <h1 className="font-navfont text-gray-300 text-xl">Our numbers</h1>
        <h2 className="font-headfont text-5xl text-white my-6 leading-snug">
          Handshake infographic mass market
          <br />
          crowdfunding iteration.
        </h2>
        <div className="grid md:grid-cols-3 w-3/4 m-auto gap-12 md:justify-items-center">
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-headfont text-green-300 text-7xl">120m</h1>
            <p className="font-navfont text-white">Cool feature title</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-headfont text-green-300 text-7xl">10.000</h1>
            <p className="font-navfont text-white">Cool feature title</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-headfont text-green-300 text-7xl">240</h1>
            <p className="font-navfont text-white">Cool feature title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
