import React from "react";
import Link from "next/link";
const Book = () => {
  return (
    <div className="relative w-full mt-16 text-center">
      <img
        src="./12.webp"
        className="h-[400px] w-full object-cover overflow-hidden rounded-2xl brightness-50"
      />
      <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 gap-4">
        <span className="font-monte text-[24px] text-[#e7b623] font-semibold">
          Ayris Apart Otel
        </span>
        <span className="font-monte text-[36px] font-cormo  text-[#fafaf9] ">
          Lüks Tatil
        </span>
        <span className="font-monte text-[#fafaf9] font-semibold text-center px-4">
          Aradığınız ister aile tatili veya şirket tatili olsun, konaklamanızı
          unutulmaz kılmak için ihtiyacınız olan her şeye sahibiz.
        </span>
        <Link href="https://wa.me/+905432318713">
          <button className="bg-[#292524] text-white p-4 rounded-2xl hover:bg-[#78716c] font-cormo font-bold">
            Rezervasyon Yap
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
