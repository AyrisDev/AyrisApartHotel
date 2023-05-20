import React from "react";
import Faciliti from "@/hooks/facilities.json";
const facilities = () => {
  return (
    <div className="fles items-center flex-col min-h-min w-full relative mt-20 text-center">
      <div className="flex flex-col justify-center items-center mb-12">
        <span className="font-monte text-[#7b4718] text-[24px]">
          Ayris Apart Hotel
        </span>
        <span className="font-cormo text-[56px] text-[#292524]">Olanaklar</span>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
        {Faciliti.map((faciliti) => (
          <div
            className="flex flex-col  items-center w-full h-full space-y-4"
            key={faciliti.id}>
            <img src={faciliti.icon} className="w-[60px] h-[60px]" />
            <span className="text-[24px] font-cormo text-[#1c1917]">
              {faciliti.title}
            </span>
            <span className="text-[16px] font-monte text-[#1c1917] text-center">
              {faciliti.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default facilities;
