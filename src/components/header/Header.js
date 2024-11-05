import React from "react";
import "../../styles/index.css";
import { Link, NavLink } from "react-router-dom";
import useClickOutSide from "../../customHook/useClickOutSide";

const listMenu = [
  // {
  //   id: 1,
  //   title: "Bio",
  // },
  {
    id: 2,
    title: "Profile",
    link: "profile",
  },
  {
    id: 3,
    title: "Videos",
    link: "videos",
  },
  {
    id: 4,
    title: "Project",
    link: "project",
  },{
    id: 5,
    title: "Images",
    link: "image",
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   link: "contact",
  // },
];

export default function Header({ handleOpen }) {
  return (
    <div className="top-0 z-10 flex justify-center w-full px-4 py-2 bg-white shadow-lg max-md:fixed max-lg:fixed lg:p-3">
      <div className="w-[1240px] flex justify-between z-10">
        <Link to={"/"}>
          <img src="../logoCV.png" alt="" className="w-8 border-0 border-transparent border-none rounded-lg lg:w-full" />
        </Link>
        <div className="items-center hidden text-lg font-semibold lg:flex gap-x-12">
          {listMenu &&
            listMenu.map((item) => {
              return (
                <span className={`sub__menu `} key={item.id}>
                  <NavLink
                    to={item.link}
                    style={({ isActive }) => ({
                      borderBottom: isActive
                        ? "2px solid #005761"
                        : "2px solid transparent",
                    })}
                  >
                    {item.title}
                  </NavLink>
                </span>
              );
            })}
          {/* <div className="border border-[#005761] px-2 rounded-lg border-1">
            <div>Vietnamese</div>
          </div> */}
        </div>
        <div className="flex items-center justify-center text-lg font-semibold lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute w-6 h-6 right-5"
            onClick={handleOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
