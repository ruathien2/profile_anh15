import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col w-full max-sm:mt-12 lg:flex-row ">
      <div className="left lg:w-full bg-[#005761] flex text-white text-justify">
        <div className="flex items-center justify-start w-full p-10 text-lg lg:justify-center lg:text-xl">
          <div className="flex flex-col gap-y-2">
            <h1 className="md:text-5xl text-2xl text-[#e7e25a] ">Hey, I'm</h1>
            <h1 className="text-3xl font-bold md:text-6xl lg:text-8xl">
              Anh Pham
            </h1>
            <span className="text-xs md:text-base">
              Editor / Developer / Designer{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="right w-full  lg:w-2/4 bg-[#005761] ">
        <img
          src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/462295944_1950920478709014_2869351961545262189_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Si06ghcqU3MQ7kNvgFLwL1k&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AfwESZZWA76ZTi5NC5shwp9&oh=00_AYBYDopjy_uZh9eprjyCiXV2PhAHgxrKAj9rWM3_ZQp6BQ&oe=672CF4A7"
          className="block w-full h-full rounded-lg bject-cover"
          alt="avatar"
        />
      </div>
    </div>
  );
}
