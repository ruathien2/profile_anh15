import React from "react";
import Banner from "../components/banner/Banner";
import Description from "../components/description/Description";
import Layout from "../layout/Layout";

export default function Home({ handleOpen }) {
  return (
    <div className=" max-sm:mt-10 min-sm:mt-10 max-md:mt-10 max-lg:mt-10">
      <Banner></Banner>
      <Description handleOpen={handleOpen}></Description>
    </div>
  );
}
