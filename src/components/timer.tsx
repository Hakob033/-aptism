"use client";

import { data } from "@/mock/data";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const difference = data.targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <span className="text-5xl text-white font-allegro text-center">
        Մկրտության հրավիրատոմս
      </span>
      <p className="text-2xl text-center text-white font-armBoloragir">
        Մնացել է
      </p>
      <div className="grid grid-cols-4 gap-4 text-center divide-x ">
        <div className="flex flex-col text-white items-center">
          <span className="text-6xl">{timeLeft.days}</span>
          <span className="">Օր</span>
        </div>
        <div className="flex flex-col text-white items-center">
          <span className="text-6xl">{timeLeft.hours}</span>
          <span className="">Ժամ</span>
        </div>
        <div className="flex flex-col text-white items-center">
          <span className="text-6xl">{timeLeft.minutes}</span>
          <span className="">Րոպե</span>
        </div>
        <div className="flex flex-col text-white items-center">
          <span className="text-6xl">{timeLeft.seconds}</span>
          <span className="">Վայրկյան</span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
