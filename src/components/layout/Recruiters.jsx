import React from "react";
import { Autoplay } from "swiper";

import "swiper/css";

import "swiper/css/autoplay";
import { Swiper, SwiperSlide, } from "swiper/react";

const Recruiters = () => {
  return (
    <div className="mt-10">
      <h1 className="my-6">Our Top Recruiters</h1>

      <div className="w-full px-10 bg-gray-300 h-28 flex justify-center items-center rounded-2xl">
        <Swiper spaceBetween={20} slidesPerView={5} modules={Autoplay} >
          <SwiperSlide>
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png"
                className="h-10"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
                className="h-10"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
                className="h-10"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png"
                className="h-10"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
                className="h-10"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
                className="h-10"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Recruiters;
