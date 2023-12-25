import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import LatestNews from "@/components/LatestNews";
import NavbarBlack from "@/components/NavbarBlack";
import Thoughts from "@/components/Thoughts";
import React from "react";

const MyBlog = () => {
  return (
    <div className="bg-white overflow-hidden">
      <NavbarBlack />
      <Thoughts />
      <LatestNews />
      <EmailForm />
      <Footer />
    </div>
  );
};

export default MyBlog;
