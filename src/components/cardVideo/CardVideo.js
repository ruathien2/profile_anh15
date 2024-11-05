import React from "react";

export default function CardVideo({ title, data }) {
  
  return (
    <div className="lg:w-[1240px] text-justify flex flex-col gap-y-3 justify-center">
      <a
        href="https://www.tiktok.com/@camal_channel?lang=en"
        className="px-2 text-xl font-semibold"
      >
        <p>{title}</p>
      </a>
      <div>
        
      </div>
      <div className="grid w-full grid-cols-1 gap-3 m-auto lg:grid-cols-3">
        {data.map(item => (<iframe src={item.url} width="100%" height="200px" allow="autoplay"></iframe>))}
      </div>
    </div>
  );
}
