import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Contact from "../components/contact/Contact";

export default function Layout({ handleOpen }) {
  return (
    <div className="">
      <Header handleOpen={handleOpen}></Header>
      <Outlet className="h-[100vh]" />
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
}
