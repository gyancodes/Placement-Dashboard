import React from "react";
import cutmlogo from "../../assets/cutm-logo.webp";

const Navbar = () => {
  return (
    <div className="header items-center h-34 shadow-xl">
      <div className="nav flex px-4 py-2 items-center">
        <div className="flex">
          <img src={cutmlogo} className="h-36 w-24" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
