import React from "react";
import Timer from "./timer";

const Header = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-no-repeat bg-contain sm:bg-cover sm:bg-fixed"
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
