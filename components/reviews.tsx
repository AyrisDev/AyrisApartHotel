import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Reviews = ({ posts }) => {
  const google = posts.result.reviews;
  console.log(posts);
  return (
    <div className="fles items-center flex-col min-h-min w-full relative mt-20">
      <div className="flex flex-col justify-center items-center mb-12">
        <span className="font-monte text-[#7b4718] text-[24px] text-center lg:text-left">
          Ayris Apart Hotel
        </span>
        <span className="font-cormo text-[56px] text-[#292524] text-center lg:text-left">
          Müşteri Yorumları
        </span>
      </div>
      <div className="flex h-[350px] md:h-[400px] m-4 xl:h-[350px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="w-full h-full">
          {google.map((posts) => (
            <SwiperSlide
              className="w-full h-full border-[4px] flex items-center justify-center"
              key={posts.time}>
              <div className="flex flex-col justify-center text-center items-center font-monte space-y-4 m-2">
                <span className="text-[#e7b623] font-bold text-[24px]">
                  {posts.rating} / 5
                </span>

                <span className="flex justify-center text-center items-center font-cormo">
                  {posts.text.slice(0, 350)} ...
                </span>
                <div className="flex flex-col font-monte text-[#7b4718]">
                  <span>{posts.author_name}</span>
                  <span>{posts.relative_time_description}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div></div>
      </div>
    </div>
  );
};

export default Reviews;
