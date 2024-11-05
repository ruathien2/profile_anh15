import React from "react";

const lis_logo = []



const list_banner = []

export default function Photos() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* <h1
        href="https://www.tiktok.com/@camal_channel?lang=en"
        className="px-2 text-xl font-semibold"
      >
        <p>Design</p>
      </h1> */}
      <div className="lg:w-[1000px] text-justify flex flex-col gap-y-3 justify-center ">
        <p
          href="https://www.tiktok.com/@camal_channel?lang=en"
          className="px-2 text-xl font-semibold"
        >
          Logo
        </p>
        <div className="grid items-center w-full h-full grid-cols-1 gap-5 px-2 m-auto lg:grid-cols-6">
          <img src="../icon(32).png" className="m-auto" alt="1" />
          <img src="../logofs.png" className="m-auto" alt="2" />
          <img src="../logo2.png" className="m-auto" alt="2" />
          <img src="../logoQ.png" className="m-auto" alt="2" />
        </div>
        <p
          href="https://www.tiktok.com/@camal_channel?lang=en"
          className="px-2 text-xl font-semibold"
        >
          Banner
        </p>
        <div className="flex flex-col items-center w-full h-full gap-5 px-2 m-auto ">
          <img className="m-auto" src="../banner_house-cat.png" alt="1" />
          <img className="m-auto" src="../bannerQ.png" alt="2" />
        </div>  
      </div>
    </div>
  );
}
