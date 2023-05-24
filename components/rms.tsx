import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Rms = () => {
  return (
    <div className="mt-20 flex flex-col justify-start flex-none flex-nowrap gap-4 min-h-min items-start max-w-[1200px] overflow-hidden relative w-full">
      <div className="flex flex-none gap-2 flex-col min-h-min overflow-visible relative z-1 w-full space-y-4">
        <p className="font-monte text-[16px] leading-6 tracking-widest font-normal text-[#7B4718]">
          Ayris Apart
        </p>
        <p className="font-advent text-[48px] leading-6 tracking-widest font-normal text-[#1C1917]">
          Odalarımızı Keşfedin
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-rows-2 flex-none gap-4 xl:h-[525px]  lg:h-[325px] lg:justify-start relative w-full mt-8 text-yellow-300 font-semibold  ">
        <Link href="https://wa.me/+905432318713">
          <div className="relative w-full border-2 border-black xl:h-[525px]  h-[325px] justify-self-start rounded-xl overflow-hidden group cursor-pointer ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 10 }}
              className="w-full h-full ">
              <img
                src="https://ipfs.io/ipfs/QmNx2KBU7gSj2tKD97KZaKnRp3aSUs4zfHAdEtbjRJn4Jw?filename=1.webp"
                className="w-full h-full object-fit"
              />
            </motion.div>
            <div className="absolute bottom-10 left-10 flex flex-col  ">
              <span className=" font-monte leading-6 tracking-widest   text-[16px] ">
                2000TL / Gecelik
              </span>
              <span className=" flex flex-col font-monte leading-6 tracking-widest   text-[16px]">
                Ön Daireler
              </span>
            </div>
            <div className="absolute bottom-4 left-10 flex flex-col ">
              <span className=" hidden group-hover:flex flex-col font-monte leading-6 tracking-widest font-semibold mt-10   text-[16px]">
                Detaylı İncele
              </span>
            </div>
          </div>
        </Link>
        <Link href="https://wa.me/+905432318713">
          <div className="relative w-full border-2 border-black xl:h-[525px]  h-[325px] justify-self-start rounded-xl overflow-hidden group cursor-pointer ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 10 }}
              className="w-full h-full ">
              <img
                src="https://ipfs.io/ipfs/QmeUseXfBEtwdFYWs1YWpS7rgQBL7bj5wqTewDaSz218b9?filename=6.webp"
                className="w-full h-full object-fit lg:object-cover"
              />
            </motion.div>
            <div className="absolute bottom-10 left-10 flex flex-col ">
              <span className=" font-monte leading-6 tracking-widest    text-[16px] ">
                2000TL / Gecelik
              </span>
              <span className=" flex flex-col font-monte leading-6 tracking-widest   text-[16px]">
                Arka Daireler
              </span>
            </div>
            <div className="absolute bottom-4 left-10 flex flex-col ">
              <span className=" hidden group-hover:flex flex-col font-monte leading-6 tracking-widest font-semibold mt-10  text-[16px]">
                Detaylı İncele
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="relative w-full border-4 border-black xl:h-[525px] h-[425px] lg:flex  hidden justify-self-start group rounded-2xl overflow-hidden font-semibold text-yellow-300  cursor-pointer ">
        <Link href="https://wa.me/+905432318713" className=" w-full">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 10 }}
            className="w-full h-full ">
            <img
              src="https://ipfs.io/ipfs/QmUeHnE2Kpv4Ybs7YxCyCnewiUdDq1X2SqtbBQYKe4impu?filename=7.webp"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute bottom-10 left-10 flex flex-col ">
            <span className=" font-monte leading-6 tracking-widest    text-[16px] ">
              2000TL / Gecelik
            </span>
            <span className=" flex flex-col font-monte leading-6 tracking-widest   text-[16px]">
              Arka Daireler
            </span>
          </div>
          <div className="absolute bottom-4 left-10 flex flex-col ">
            <span className=" hidden group-hover:flex flex-col font-monte leading-6 tracking-widest font-semibold mt-10    text-[16px]">
              Detaylı İncele
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Rms;
