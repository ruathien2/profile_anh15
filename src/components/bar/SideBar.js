import React from "react";
import { Link } from "react-router-dom";

const list_menu = [
  {
    id: 1,
    title: "Thông Tin Cá Nhân",
  },
  {
    id: 2,
    title: "Giới Thiệu Cá Nhân",
  },
  {
    id: 3,
    title: "Quản Lý Dự Án",
  },
];

export default function SideBar() {
  return (
    <div className=" shadow w-[300px] h-[100vh]">
      <div className="flex justify-center p-3">
        <Link to={"/"}>
          <img src="../icon(32).png" alt="" className="w-8 lg:w-full" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        {list_menu.map((item) => {
          return (
            <div
              className="items-center w-full p-2 text-center cursor-pointer hover:bg-gray-100 hover:text-black"
              key={item.id}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
