import React from "react";
import cutmlogo from "../../assets/cutm-logo.webp";

const Navbar = () => {
  return (
    <div className="shadow-xl  mb-14">
      <div className="flex items-center px-4 py-2 justify-between text-center">
        <img src={cutmlogo} className="h-24 w-22" alt="" />
        <h1 className="font-sans text-gray-700 font-bold text-2xl">Career Development Cell</h1>
      </div>
    </div>
  );
};

export default Navbar;
