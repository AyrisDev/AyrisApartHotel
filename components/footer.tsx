import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Link from "next/link";
const containerStyle = {
  width: "600px",
  height: "300px",
};

const center = {
  lat: 37.0195418,
  lng: 27.9463528,
};

const Footer = () => {
  return (
    <div className="bg-[#1c1917] w-full  max-h-fit text-[#fafaf9] font-monte relative mb-4">
      <div className=" container mx-auto px-10 ">
        <div className="">
          <div className="grid sm:grid-rows-2 grid-rows-2 lg:grid-rows-1 grid-flow-col auto-rows-max lg:grid-flow-row lg:grid-cols-2 justify-center">
            {/* Contact*/}
            <div className="flex flex-col mt-16 font-monte space-y-4 px-16">
              <span className="font-bold">İletişim</span>
              <span>
                Ören Mah. Orta İskele Cad. No:71 Ayris Apart - Milas/Muğla
              </span>
              <span>ayrisapart@gmail.com</span>
            </div>

            {/* SiteMap*/}
            <div className="flex items-center justify-center mt-4 lg:w-full w-[300px] sm:w-[600px]">
              <LoadScript
                googleMapsApiKey={`${process.env.NEXT_PUBLIC_GA_API}`}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}>
                  {/* Child components, such as markers, info windows, etc. */}
                  <></>
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-[#ffffff33] border-0 dark:bg-gray-700 " />
        <div className="grid grid-cols-1 pb-4  lg:grid-cols-3 items-center space-y-2 mb-4">
          <Link href="https://ayris.dev">
            <span className="flex justify-center">
              Developed with ︎🤍 by Ayris.Dev
            </span>{" "}
          </Link>
          <div className="flex flex-row justify-center">
            <Link href="https://wa.me/+905432318713">
              <img className="w-8" src="./svg/wp.svg" />{" "}
            </Link>
            <Link href="https://www.instagram.com/ayrisapart">
              {" "}
              <img className="w-8" src="./svg/insta.svg" />{" "}
            </Link>
          </div>
          <span className="flex lg:justify-end justify-center ">
            @2023 Ayris Apart Otel
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
