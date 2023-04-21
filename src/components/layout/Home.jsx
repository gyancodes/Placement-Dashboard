import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Recruiters from "./Recruiters";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="px-4 my-4">
        <h1 className="text-2xl font-serif py-4">Career Development Cell</h1>

        <Stats />
        <Recruiters />
      </div>


    </>
  );
};

export default Home;
