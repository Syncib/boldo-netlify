import React from "react";
import Image from "next/image";
import scott from "../public/Scott.png";
import pam from "../public/Pam.png";
import david from "../public/David.png";

const OurTeam = () => {
  return (
    <div className="bg-white h-fit py-10 px-5 md:px-20">
      <div className="md:py-12 flex max-w-4xl m-auto">
        <div>
          <h1 className="font-navfont text-gray-400 text-xl">Our team</h1>
          <h2 className="font-headfont text-5xl text-black my-2 leading-snug text-pretty">
            The leadership team
          </h2>
          <p className="text-gray-400 font-navfont text-pretty my-4">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake
            <br />
            infographic mass market crowdfunding iteration. Traction stock user
            experience
            <br />
            deployment beta innovator incubator focus.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 justify-items-center gap-4 max-w-5xl m-auto">
        <div>
          <Image src={scott} alt="scott" />
          <h2 className="font-navfont text-3xl py-5">Michael Scott</h2>
          <p className="font-navfont text-gray-400">General Manager</p>
        </div>
        <div>
          <Image src={david} alt="david" />
          <h2 className="font-navfont text-3xl py-5">Dwight Schrute</h2>
          <p className="font-navfont text-gray-400">General Manager</p>
        </div>
        <div>
          <Image src={pam} alt="pam" />
          <h2 className="font-navfont text-3xl py-5">Pam Beetsley</h2>
          <p className="font-navfont text-gray-400">General Manager</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
