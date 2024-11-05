import React from "react";

export default function WidgetPhone() {
  return (
    <div><div className=" fixed lg:hidden bottom-[10%] right-0">
      <a
        href="tel:+84-393-171-757"
        title="Click to Call"
        className="flex flex-row items-center "
      >
        <div className="lds-ripple">
          <div></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute z-10 w-10 h-10 p-2 text-white translate-x-5 -translate-y-5 bg-red-500 rounded-full top-2/4 right-2/4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <div></div>
        </div>

        {/* <span className="p-1 text-sm text-white bg-red-500">
          +84 393 17 17 57
        </span> */}
      </a>
    </div>
    <div className=" fixed lg:hidden bottom-[21%] right-0">
      <a
        href="tel:+84-393-171-757"
        title="Click to Call"
        className="flex flex-row items-center "
      >
        <div className="lds-ripple lds-ripples">
            <div className=""></div>
             <a href="https://zalo.me/0393171757" target="_blank">
                <img src='../zalo.png' alt="zalo" className="absolute z-10 p-2 -translate-y-2/4 translate-x-2/4 top-2/4 right-2/4"/>
            </a>
          <div></div>
        </div>
      </a>
    </div>
    </div>
  );
}
