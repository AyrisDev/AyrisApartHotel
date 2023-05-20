import React from "react";
import Location from "@/hooks/location.json";
const oren = () => {
  return (
    <div className="mt-20 grid lg:grid-cols-2 grid-cols-1 justify-center text-[#292524] max-w-[1200px] overflow-hidden relative">
      <div className="flex justify-center flex-col">
        <div className="flex flex-col ">
          <span className="text-[24px] font-monte text-[#7b4718]">
            Ayris Apart Hotel
          </span>
          <span className="text-[56px] font-cormo text-[#292524] ">
            Yerel Olanaklar
          </span>

          <span className="text-[18px]  font-monte">
            Türkiye’de yazın gezilecek yerler arasındaki Ören diğer tatil
            beldelerine nazaran biraz arka planda kalmış. Çoğu insan Fethiye,
            Bodrum, Akyaka, Marmaris gibi popüler destinasyonları tercih edince,
            hayat burada biraz daha sakin yaşanıyor. Buna rağmen müdavimleri
            olan yerli turistler buraya her yıl gelmekten asla bıkmıyorlar.
            Sakin tatil beldeleri arasındaki Ören, yeşil doğası, muhteşem
            kıyıları, şahane koyları, plajları ve insanları ile sizin de hayran
            kalabileceğiniz bir mahalle.
          </span>
        </div>
        {/* Description */}
        <div className="flex flex-col items-center justify-center  space-y-2 mt-6">
          {Location.map((location) => (
            <div className="flex flex-row " key={location.id}>
              <img src={location.icon} className="w-16 h-16 mr-6" />

              <div className="flex flex-col gap-2 justify-start">
                <div className="font-cormo text-[#292524] text-[24px]">
                  {location.title}
                </div>
                <span className="font-monte text-[#292524] text-[15px]">
                  {location.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Images */}
      <div className="relative lg:flex items-center justify-center flex-col  max-w-[450px] mx-auto hidden gap-4">
        {Location.map((location) => (
          <img
            key={location.id}
            src={location.image}
            className="rounded-lg object-fit lg:h-[350px] h-[350px] "
          />
        ))}
      </div>
    </div>
  );
};

export default oren;
