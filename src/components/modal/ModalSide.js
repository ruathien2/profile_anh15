import React, { useState } from "react";
import useClickOutSide from "../../customHook/useClickOutSide";

export default function ModalSide({ handleCancel }) {
  return (
    <div>
      <div className=" overflow-scroll overflow-x-hidden scroll-m-0 scroll-smooth fixed z-10 h-[100vh] top-0  lg:w-2/4 w-full bg-[#005761] transition-all">
        <div
          className="absolute text-white cursor-pointer right-5 top-5"
          onClick={handleCancel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 px-20 mt-20">
          <div className="flex flex-col w-full gap-6 py-10 border-b-2 border-white">
            <h1 className="md:text-5xl text-3xl text-[#e7e25a] font-bold">
              Resume
            </h1>
            <div className="flex flex-col text-white">
              <span>Resume Born: 2000</span> <span>Height: 1m65</span>
              <span>Eye Color: Black</span> <span>Hair Color: Black</span>
              <span>Languages: English, Vietnamese</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-20 px-20 pb-10 mt-10 lg:grid-cols-2">
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-2xl text-[#e7e25a] font-semibold">
              Special Skills
            </h1>
            <div className="flex flex-col text-white">
              <span>Swimming</span>
              <span>Football</span>
              <span>Piano</span>
              <span>Guitar</span>
              <span>Harmonica</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-2xl text-[#e7e25a] font-semibold">Tiktok</h1>
            <div className="flex flex-col text-white">
              <span>Edit Video</span>
              <span>Video Anime</span>
              <span>Tiktok Sales</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-2xl text-[#e7e25a] font-semibold">Education</h1>
            <div className="flex flex-col text-white">
              <span>Yersin University</span>
              <span>Edit Video for University</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-2xl text-[#e7e25a] font-semibold">
              Experience
            </h1>
            <div className="flex flex-col text-white">
              <span>Sale Website 2024</span>
              <span>Designer 2022 - now</span>
              <span>Editer 2022 - now</span>
              <span>Teach Programing Basic 2024 - now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
