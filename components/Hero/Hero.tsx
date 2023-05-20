import React from "react";

export default function Hero() {
  return (
    <div className="flex items-center flex-none flex-col flex-nowrap min-h-screen justify-center relative w-full z-10">
      <div className="flex items-center flex-none flex-nowrap gap-4 min-h-screen justify-center relative w-full z-10 ">
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src="./2.webp" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center flex-none flex-nowrap gap-2 flex-row min-h-fit justify-center relative xl:w-[1200px]">
          <div className="flex flex-col justify-start flex-shrink-0 transform-0">
            <span className=" font-advent font-bold text-white cursor-none flex justify-center sm:text-[256px]  text-[180px] text-center items-center  sm:-mt-32 -mt-20 ">
              ayris
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
