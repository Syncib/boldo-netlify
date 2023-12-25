import React from "react";
import Image from "next/image";
import bloggreen from "../public/bloggreen.png";
import chandler from "../public/chadler.png";
import monica from "../public/Monica.png";
import rachle from "../public/Rachel.png";
import bloggirl from "../public/bloggirl.png";
import blogpaper from "../public/blogpaper.png";
import newsrest from "../public/newsrestaurant.png";
import newscall from "../public/newscall.png";
import newshand from "../public/newshandshake.png";

const LatestNews = () => {
  return (
    <div className="px-5 md:px-20 pt-20 max-w-7xl m-auto">
      <h1 className="font-headfont text-5xl text-black py-6 my-2 leading-snug text-center lg:text-left">
        Latest news
      </h1>
      <div className="grid justify-items-center lg:justify-items-start lg:grid-cols-3 lg:grid-rows-2 gap-6">
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
            <Image src={chandler} alt="chandler" />
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
            <Image src={rachle} alt="rachle" />
            <div className="text-left">
              <p>Rachel Green</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={blogpaper} alt="blogpaper" />
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
            <Image src={monica} alt="monica" />
            <div className="text-left">
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={newscall} alt="newscall" />
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
            <Image src={chandler} alt="chandler" />
            <div className="text-left">
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={newsrest} alt="newsrest" />
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
            <Image src={rachle} alt="rachle" />
            <div className="text-left">
              <p>Rachel Green</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={newshand} alt="newshand" />
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
            <Image src={monica} alt="monica" />
            <div className="text-left">
              <p>Monica Geller</p>
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

export default LatestNews;
