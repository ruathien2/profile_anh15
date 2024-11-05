import React from "react";

export default function Description({ handleOpen }) {
  return (
    <div className="flex flex-col justify-center py-20 items-center bg-[#f0f0f0]">
      <h1 className="text-[#005b7a] md:text-5xl text-4xl font-bold mb-12">
        About Me
      </h1>
      <div className="max-w-[1000px] px-4 text-justify">
        <p>Hello everyone,</p>
        <br />
        <p>
          My name is Pham Duc Anh, I was born and raised in Bao Loc City, Lam
          Dong Province. I am proud to be a child of the mountains and forests,
          where I can be close to nature and the majestic landscapes of the
          mountains and forests.
        </p>
        <br />
        <p>
          I am a person who can adapt quickly to new environments. I look
          forward to learning many things from everyone in the company. My dream
          is to become a good programmer and create the best website for myself.
          I look forward to advancing in this programming career. I was a quiet
          person in the beginning and I was able to learn on my own. Even though
          I'm not smart, I will try to study and work hard to progress as
          quickly as possible and catch up with everyone in the group.
        </p>
        <br />
        <p>
          I can play many musical instruments and sports, I was in a band and
          performed in small shows. My hobby is traveling to many places and
          exploring strange and majestic places of nature.
        </p>
      </div>
      <button
        onClick={handleOpen}
        className="bg-[#f9db4f] px-5 py-2 mt-8 hover:bg-[#005b7a] hover:text-[#f9db4f] transition-all outline-none"
      >
        View Full Remuse
      </button>
    </div>
  );
}
