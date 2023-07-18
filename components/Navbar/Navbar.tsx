import React, { use } from "react";
import { useState } from "react";
import Hero from "@/components/Hero/Hero";
import Divider from "../UI/divider";
import Button from "../UI/buttonWhite";
import ButtonBlack from "../UI/buttonBlack";
import Menu from "../../hooks/menu.json";
import Link from "next/link";
import Rooms from "../rooms";
import Rms from "../rms";
import Oren from "../oren";

import Book from "../book";
import Facilities from "../facilities";
import Faq from "../faq";
import Footer from "../footer";

export default function Navbar({ posts }: { posts: any }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div className=" container mx-auto flex justify-between my-8 px-4 items-center text-center">
          <div
            className="flex items-center justify-center space-x-2 cursor-pointer group z-50 "
            onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center justify-center space-x-2 cursor-pointer group-hover:text-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgba(0,0,0,1.0)"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-white ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
              <span className="font-bold text-white font-advent text-xl ">
                Menu
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center z-50">
            <Button />
          </div>
        </div>
      ) : (
        <div className=" flex grid ease-out duration-300 font-advent h-full w-full ">
          <div className=" flex grid md:grid-cols-2 min-h-screen ">
            {/* Left Side*/}
            <div className="  bg-[#181818] text-white flex ">
              <div className="flex flex-col space-y-4 items-start max-w-[720px] min-h-screen relative justify-between  md:my-4 py-12 md:py-24 px-24">
                {" "}
                {/* Close Button*/}
                <div
                  className=" flex  md:mt-4 uppercase text-[36px] cursor-pointer "
                  onClick={() => setIsOpen(!isOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w126 h-12 ">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* Logo */}
                <div className="md:mb-24 mb-12">
                  {" "}
                  <img
                    src="https://ipfs.io/ipfs/QmNyR2AHFoUEuEzHttCr9UNYjwSwW2kkLj3FL4gF2tiohD?filename=AyrisLogo.png"
                    className="h-24"
                  />
                </div>
                {/* Menu */}
                <div className="flex flex-col md:text-[36px] text-[24px]  uppercase">
                  {Menu.map((menu) => (
                    <span
                      className="cursor-pointer hover:text-black hover:bg-white px-4"
                      key={menu.id}>
                      <Link href={menu.url}>{menu.name}</Link>
                    </span>
                  ))}
                </div>
                {/* Button */}{" "}
                <div className="my-16">
                  {" "}
                  <Button />
                </div>
              </div>
            </div>
            {/* Right Side*/}
            <div className="  bg-[#FFFEFC] text-black flex justify-center items-center  p-10   ">
              <div className="flex justify-center  items-center flex-col lg:max-w-[500px]  m-auto lg:max-h-[600px]  md:max-h-[500px] max-h-[450px] border border-black ">
                <div className="flex flex-col justify-center items-center  space-y-4 lg:px-32 lg:py-24  py-12  lg:max-w-[500px] ">
                  <span className="font-bold font-advent md:text-[90px] text-[70px] lg:mb-10 mt-10 text-center">
                    Erken Kayıt
                  </span>

                  <span>%10 İndirim</span>
                  <Divider />
                  <span>Ücretsiz İptal</span>
                  <Divider />
                  <span>Oda Seçme İmkanı</span>
                  <Divider />
                </div>
                <div className=" ">
                  {" "}
                  <ButtonBlack />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen ? (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Hero />
          <div className="flex items-center bg-[#fafaf9] flex-col min-h-min justify-center overflow-visible px-[10px] xl:px-[160px] md:px-[100px] xl:py-[80px] py-[40px] relative w-full ">
            <Rooms />
            <Rms />
            <Oren />

            <Book />
            <Facilities />
            <Faq />
          </div>
          <Footer />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
