import React from "react";
import Timer from "./timer";

const Header = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-contain bg-no-repeat bg-center relative"
      style={{
        backgroundImage: 'url("/images/main-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/30 brightness-75 z-0" />
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <Timer />
      </div>
    </div>
  );
};

export default Header;
