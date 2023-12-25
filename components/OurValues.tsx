import React from "react";
import Image from "next/image";
import valuepaper from "../public/valuepaper.png";
import valuegreen from "../public/valuegreen.png";
const OurValues = () => {
  return (
    <div className="md:py-12 flex justify-center max-w-4xl m-auto py-10 px-5">
      <div className="text-white ">
        <h1 className="font-navfont text-xl">Our values</h1>
        <h2 className="font-headfont text-5xl my-2 leading-snug text-pretty">
          The leadership team
        </h2>
        <p className="font-navfont text-pretty my-4">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake
          <br />
          infographic mass market crowdfunding iteration. Traction stock user
          experience
          <br />
          deployment beta innovator incubator focus.
        </p>
        <div className="grid my-5 lg:my-20">
          <div className="grid lg:grid-cols-4">
            <Image src={valuepaper} alt="valuepaper" />
            <div className="col-span-3">
              <h1 className="font-headfont text-3xl">We are commited.</h1>
              <p className="font-headfont my-4 text-lg tracking-wider text-gray-200">
                Conversion angel investor entrepreneur first mover advantage.
                <br />
                Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 my-12">
            <Image src={valuegreen} alt="valuegreen" />
            <div className="col-span-3">
              <h1 className="font-headfont text-3xl">We are responsible.</h1>
              <p className="font-headfont my-4 text-lg tracking-wider text-gray-200">
                Conversion angel investor entrepreneur first mover advantage.
                <br />
                Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4">
            <Image src={valuepaper} alt="valuepaper" />
            <div className="col-span-3">
              <h1 className="font-headfont text-3xl">We aim for progress.</h1>
              <p className="font-headfont my-4 text-lg tracking-wider text-gray-200">
                Conversion angel investor entrepreneur first mover advantage.
                <br />
                Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
