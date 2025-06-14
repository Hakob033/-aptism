import React from "react";
import Timer from "./timer";

const Header = () => {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage: 'url("/images/main-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/30 brightness-75 z-0"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <Timer />
      </div>
    </div>
  );
};

export default Header;
