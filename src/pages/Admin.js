import React from "react";
import SideBar from "../components/bar/SideBar";
import BarContent from "../components/barContent/BarContent";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="flex flex-row gap-4">
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  );
}
