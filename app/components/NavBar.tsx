"use client";
import React, { useState } from "react";
const NavBar = () => {
  const [collapseState, setCollapseState] = useState(true);
  return (
    <div>
      <nav className="flex justify-between items-center px-5 lg:px-20 pt-20">
        <div>
          <img src="Logo.png" alt="Logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 text-white items-center">
            <li>Product</li>
            <li>Services</li>
            <li>About</li>
            <li>
              <button className="text-black bg-white rounded-full px-8 py-2">
                Log In
              </button>
            </li>
          </ul>
        </div>

        <svg
          onClick={() => {
            setCollapseState(!collapseState);
          }}
          className="w-12 md:hidden cursor-pointer"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </nav>
      <div className={collapseState ? "hidden" : "block"} id="mycollapsable">
        <ul className="flex flex-col gap-6 text-white items-center justify-center mt-12">
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <li>
            <button className="text-black bg-white rounded-full px-8 py-2">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
