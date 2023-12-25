import React from "react";
import Image from "next/image";
import blogbird from "../public/blogbird.png";
import chandler from "../public/chadler.png";
const Thoughts = () => {
  return (
    <div className="px-5 md:px-20 pt-20 bg-white border-b-4">
      <div className="flex flex-col items-center">
        <h2 className="font-navfont">Blog</h2>
        <h1 className="font-headfont text-center md:text-left text-6xl">
          Thoughts and words
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 items-center gap-12 py-9">
        <Image className="w-full" src={blogbird} alt="blogbird" />
        <div className="lg:justify-self-end">
          <div className="flex gap-3 mt-5 items-center">
            <h1 className="font-navfont font-bold">Category</h1>
            <p className="font-navfont text-gray-400">November 22, 2021</p>
          </div>
          <h3 className="font-navfont text-5xl mt-3 text-pretty">
            Pitch termsheet backing
            <br />
            validation focus release.
          </h3>
          <div className="flex mt-5 gap-2 items-center">
            <Image src={chandler} alt="girlflow" />
            <div className="text-left">
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
