import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const containerStyle = {
  width: "600px",
  height: "300px",
};

const center = {
  lat: 37.0195418,
  lng: 27.9463528,
};

const footer = () => {
  const ayrisApart = {
    center: {
      lat: 37.0195418,
      lng: 27.9463528,
    },
    zoom: 17,
  };

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
              <LoadScript googleMapsApiKey="AIzaSyBzWHf3htkxaqfu15xR6wEjqz3tIIvWqtk">
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
        <hr class="h-px my-8 bg-[#ffffff33] border-0 dark:bg-gray-700 " />
        <div className="grid grid-rows-1 grid-flow-col  pb-4 lg:grid-rows-1 lg:grid-flow-row lg:grid-cols-2 items-center space-y-2 mb-4">
          <span className="flex justify-center">
            Developed with ︎🤍 by Ayris.Dev
          </span>
          <div className="flex flex-row justify-center">
            <img className="w-8" src="./svg/wp.svg" />
            <img className="w-8" src="./svg/insta.svg" />
          </div>
          <span className="flex lg:justify-end justify-center ">
            @2023 Ayris Apart Otel
          </span>
        </div>
      </div>
    </div>
  );
};

export default footer;