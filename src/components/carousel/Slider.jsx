import React from "react";
import { Wrapper } from "./SliderStyles";
import { Button } from "..";

import { testData } from "../../util/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

function Slider() {
  return (
    <Wrapper>
      <div className="container mx-auto flow">
        <div>
          <h2 className="text-center text-4xl font-bold">What they've said</h2>
        </div>

        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testData.map((item, index) => (
            <div className="lg:grid lg:grid-cols-3 relative" key={index}>
              <SwiperSlide>
                <div className="lg:last:mr-4 rounded-lg bg-gray-50 shadow-md">
                  <div className="p-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-full flex items-center justify-center">
                        <img
                          className="w-16 h-16 rounded-full"
                          src={item.img}
                          alt="img"
                        />
                      </div>
                      <h5 className="font-bold text-main-blue my-4">
                        {item.title}
                      </h5>
                    </div>
                    <p className="mb-2 text-sm text-center text-grayish-blue ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className="flex justify-center items-center text-light-gray">
          <Button title="get started" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Slider;
