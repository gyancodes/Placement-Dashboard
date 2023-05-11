import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Recruiters from "./Recruiters";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-center items-center my-10">
        <Link to="/dashbaord" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Visit Dashboard
        </Link>

      </div>

      <Stats />
      <Recruiters />
      <Footer />
    </>
  );
};

export default Home;
