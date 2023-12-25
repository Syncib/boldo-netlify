import React from "react";
import Image from "next/image";
import resturant from "../public/resturant.png";
import downarrow from "../public/downarrow.png";
const ConnectCustomers = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <div className="flex justify-center items-start">
        <Image className=" w-screen" src={resturant} alt="resturant" />
      </div>
      <div className="flex justify-between mt-20 flex-col lg:flex-row">
        <div className="font-headfont text-4xl text-pretty leading-snug">
          We connect our customers
          <br />
          with the best, and help them
          <br />
          keep up-and stay open.
        </div>
        <div className="flex flex-col gap-5 mt-5 lg:mt-0 justify-evenly mx-4">
          <div className="flex gap-7 justify-between border-b">
            <h4 className="text-2xl">
              We connect our customers with the best?
            </h4>
            <div className="bg-blue-950 min-w-7 min-h-7 w-7 h-7 flex items-center justify-center rounded-full">
              <Image src={downarrow} alt="downarrow" />
            </div>
          </div>
          <div className="flex gap-7 justify-between border-b">
            <h4 className="text-2xl">
              Android research & development rockstar?
            </h4>
            <div className="bg-blue-950 min-w-7 min-h-7 w-7 h-7 flex items-center justify-center rounded-full">
              <Image src={downarrow} alt="downarrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCustomers;
