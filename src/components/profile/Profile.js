import React from "react";

export default function Profile() {
  return (
    <div className="h-[100vh] max-sm:mt-20 flex justify-center mb-5 mt-5">
      <img
        src="../cv.jpg"
        alt="cv"
        className="lg:w-[30] shadow-xl  object-cover"
      />
    </div>
  );
}
