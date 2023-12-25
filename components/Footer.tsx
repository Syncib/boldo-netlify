import React from "react";
import Image from "next/image";
import footerlogo from "../public/FooterLogo.png";
const Footer = () => {
  return (
    <div className="h-fit py-10 px-5 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col justify-between md:h-60">
          <div>
            <Image src={footerlogo} alt="footer-logo" />
            <p className="mt-5 text-gray-500 font-navfont">
              Social media validation business model
              <br />
              canvas graphical user interface launch
              <br />
              party creative facebook iPad twitter.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly flex-grow">
          <div className="flex flex-col justify-between mt-5 md:mt-0">
            <h2 className="font-bold">Landings</h2>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="flex flex-col justify-between mt-5 md:mt-0">
            <h2 className="font-bold">Company</h2>
            <p>Home</p>
            <p>
              Careers
              <span className="bg-green-300 text-xs py-1 px-3 mx-4 font-navfont font-bold rounded-full">
                Hiring!
              </span>
            </p>
            <p>Services</p>
          </div>
          <div className="flex flex-col justify-between mt-5 md:mt-0">
            <h2 className="font-bold">Resources</h2>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 font-navfont mt-5 md:mt-0">
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
