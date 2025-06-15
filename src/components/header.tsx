import React from "react";
import Timer from "./timer";

const Header = () => {
  return (
    <div
      className="h-[80vh] sm:h-screen bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/images/main-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/30 brightness-75 z-0" />
      <div className="relative z-10 flex justify-center items-center h-full px-4 sm:px-6">
        <Timer />
      </div>
    </div>
  );
};

export default Header;
