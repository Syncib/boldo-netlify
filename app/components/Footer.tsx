import React from "react";
import Image from "next/image";
import footerlogo from "../../public/FooterLogo.png";
const Footer = () => {
  return (
    <div className="h-fit py-10 px-5 md:px-20 bg-white">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between h-60">
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
          <p className="text-gray-500 font-navfont">All rights reserved.</p>
        </div>
        <div className="flex justify-evenly flex-grow">
          <div>
            <h2 className="text-bold">Landings</h2>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div> <h2 className="text-bold">Landings</h2>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p></div>
          <div> <h2 className="text-bold">Landings</h2>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
