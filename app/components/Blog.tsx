import React from "react";
import Image from "next/image";
import bloggreen from "../../public/bloggreen.png";
import chandler from "../../public/chadler.png";
import bloggirl from "../../public/bloggirl.png";
import blogpaper from "../../public/blogpaper.png";
const Blog = () => {
  return (
    <div className="bg-white h-fit py-10 px-5 md:px-20">
      <div className="text-center py-12">
        <h1 className="font-navfont text-gray-500 text-xl">Our Blog</h1>
        <h2 className="font-headfont text-5xl hidden lg:block">
          Handshake infographic mass market
          <br /> crowdfunding iteration.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch gap-4">
        <div>
          <Image src={bloggreen} alt="bloggreen" />
          <div className="flex gap-3 mt-5 items-center">
            <h1 className="font-navfont font-bold">Category</h1>
            <p className="font-navfont text-gray-400">November 22, 2021</p>
          </div>

          <h3 className="font-navfont text-xl mt-3 text-nowrap">
            Pitch termsheet backing
            <br />
            validation focus
            <br />
            release.
          </h3>
          <div className="flex mt-5 gap-2 items-center">
            <Image src={chandler} alt="girlflow" />
            <div className="text-left">
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={bloggirl} alt="bloggreen" />
          <div className="flex gap-3 mt-5 items-center">
            <h1 className="font-navfont font-bold">Category</h1>
            <p className="font-navfont text-gray-400">November 22, 2021</p>
          </div>
          <h3 className="font-navfont text-xl mt-3 text-nowrap">
            Seed round direct mailing non-
            <br />
            disclosure agreement graphical
            <br />
            user interface rockstar.
          </h3>
          <div className="flex mt-5 gap-2 items-center">
            <Image src={chandler} alt="girlflow" />
            <div className="text-left">
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={blogpaper} alt="bloggreen" />
          <div className="flex gap-3 mt-5 items-center">
            <h1 className="font-navfont font-bold">Category</h1>
            <p className="font-navfont text-gray-400">November 22, 2021</p>
          </div>
          <h3 className="font-navfont text-xl mt-3 text-nowrap">
            Beta prototype sales iPad gen-z
            <br />
            marketing network effects value
            <br />
            proposition
          </h3>
          <div className="flex mt-5 gap-2 items-center">
            <Image src={chandler} alt="girlflow" />
            <div className="text-left">
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="px-12 py-3 rounded-full border-2 border-black text-black font-bold mt-16">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blog;
