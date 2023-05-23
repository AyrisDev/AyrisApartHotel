import React from "react";

const Rooms = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col overflow-visible relative flex-none flex-nowrap  xl:space-x-36 space-x-24 ">
      <div className="flex  justify-items-start flex-col  lg:mx-[36px] relative xl:w-[600px]  lg:w-[400px] w-full">
        <div className="flex items-start flex-none flex-col flex-nowrap min-h-min justify-start overflow-hidden relative ">
          <div className="flex flex-col justify-start flex-shrink-0  space-y-8">
            <p className="text-[24px] tracking-[2px]">Ayris Apart - Ören</p>
            <h2 className="font-light xl:text-6xl text-4xl font-monte  leading-10">
              Rezervasyonunuzu Yapın
            </h2>

            <span className="font-medium text-[18px] tracking-[2px] ">
              Ören´in en huzurlu ve en sakin apartında rezervasyonunuzu ayırarak
              tatilin keyfini çıkarın. En iyi olanaklarla kendinizi kaptırın ve
              meşhur olduğumuz birinci sınıf konukseverliğin tadını çıkarın.
            </span>
            <span>
              Lüks odalarımız, sizi evinizde hissettirecek muhteşem çevre
              manzarası, pelüş nevresimler ve zarif mobilyalar ile her türlü
              ihtiyacınızı karşılayacak şekilde tasarlanmıştır. Kendini işine
              adamış personelimiz, size hak ettiğiniz kişiselleştirilmiş ilgiyi
              sağlamak için her zaman hazırdır ve birinci sınıf imkanlarımız
              kendinizi gençleşmiş ve tazelenmiş hissetmenizi sağlayacaktır.
            </span>
          </div>
        </div>
      </div>
      <div className="relative lg:flex hidden will-change-transform flex-col flex-nowrap flex-none min-h-min justify-end min-w-min relative overflow-visible w-full]">
        <div className="w-[400px] h-[533px] overflow-hidden relative rounded-xl  flex-none will-change-transform">
          <div className="absolute left-0 top-0 right-0 bottom-0 shadow-lg">
            <img
              src="./1.jpg"
              className="w-full h-full object-cover overflow-clip"
            />
          </div>
        </div>
        <div className="flex border-4 border-white bottom-[120px] h-[330px] flex-none will-change-transform absolute z-10 w-[220px] -left-[78px] drop-shadow-2xl overflow-hidden rounded-xl">
          <div className="absolute  top-0 right-0 bottom-0 overflow-hidden">
            <img
              src="./2.jpg"
              className="w-full h-full object-cover overflow-clip"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
