import React from "react";

const EmailForm = () => {
  return (
    <div className="h-fit py-10 px-5 md:px-20 bg-white">
      <div className="text-center defaultcolor py-10 rounded-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-headfont py-10 text-white text-4xl leading-snug">
            An enterprise template to ramp
            <br />
            up your company website
          </h2>
          <input
            className="py-3 px-8 bg-white rounded-full"
            type="email"
            placeholder="Your email address"
          />
          <button className="bg-green-300 py-3 px-8 mx-4 font-navfont font-bold rounded-full mt-6">
            Start Now
          </button>
        </div>
        <div className="hero-circle absolute top-0 right-0 rounded-bl-full"></div>
      </div>
    </div>
  );
};

export default EmailForm;
