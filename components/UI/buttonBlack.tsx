import React from "react";
import Link from "next/link";
export default function button() {
  return (
    <Link href="https://wa.me/+905432318713">
      <button className="buttonBlack font-advent">
        Rezervasyon Yap
        <div className="buttonBlack__horizontal"></div>
        <div className="buttonBlack__vertical"></div>
      </button>
    </Link>
  );
}
