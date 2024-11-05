import React from "react";
import CardVideo from "../cardVideo/CardVideo";
import Photos from "../photos/Photos";
import { list_videos } from "../../data/Data";
export default function ShowReel() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 max-sm:mt-20">
      <CardVideo title="Tiktok CammalChannel - My Tiktok" data = {list_videos}></CardVideo>
    </div>
  );
}
