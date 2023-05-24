import React from "react";
import Link from "next/link";
export default function buttonWhite() {
  return (
    <Link href="https://wa.me/+905432318713">
      <button className="button font-advent w-[150px] text-[12px]">
        Rezervasyon
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </button>
    </Link>
  );
}
