import React from "react";
import fmc from "../../assets/company/fmc.png";
import adove from "../../assets/company/adove.png";
import bosch from "../../assets/company/Bosch.png";
import ashok from "../../assets/company/ashok.png";
import phillips from "../../assets/company/Phillips.png";
import Byjus from "../../assets/company/Byjus.png";

import Tata from "../../assets/company/tata.png";
import virtusa from "../../assets/company/virtusa.png";
import wipro from "../../assets/company/wipro.png";
import hyundai from "../../assets/company/hyundai.png";
import deloitte from "../../assets/company/Deloitte.png";
import justdail from "../../assets/company/justdail.png";







const Recruiters = () => {
  return (
    <>
      <div className="mt-24 text-center font-semibold">
        <h1 className="my-16 font-bold text-gray-600 text-4xl">Our Top Recruiters</h1>
      </div>
      <div className="flex justify-center items-center flex-col">


        <div className="lg:flex grid grid-cols-2 justify-center  gap-12 px-5 items-center">
          <div>
            <img src={fmc} alt="1" className="w-36" />
          </div>
          <div>
            <img src={adove} alt="1" className="w-36" />
          </div>
          <div>
            <img src={bosch} alt="1" className="w-36" />
          </div>
          <div>
            <img src={ashok} alt="1" className="w-36" />
          </div>
          <div>
            <img src={phillips} alt="1" className="w-36" />
          </div>
          <div>
            <img src={Byjus} alt="1" className="w-36" />
          </div>

        </div>
        <div className="lg:flex justify-center grid grid-cols-2  gap-12 px-5 mt-10 items-center">
          <div>
            <img src={Tata} alt="1" className="w-36" />
          </div>
          <div>
            <img src={virtusa} alt="1" className="w-36" />
          </div>
          <div>
            <img src={wipro} alt="1" className="w-36" />
          </div>
          <div>
            <img src={deloitte} alt="1" className="w-36" />
          </div>
          <div>
            <img src={hyundai} alt="1" className="w-36" />
          </div>
          <div>
            <img src={justdail} alt="1" className="w-36" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruiters;
