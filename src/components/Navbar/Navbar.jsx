import React from "react";
import { MdBattery30 } from "react-icons/md";
import image from "@/assets/image.png";
import { useContextProvider } from "@/context/Context";

import { FaLockOpen, FaLock } from "react-icons/fa6";

function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  // let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = seconds < 10 ? "0" + seconds : seconds;
  let timeString = hours + ":" + minutes + " " + ampm;
  return timeString;
}

function Navbar() {
  const { isLockOpen, setIsLockOpen, data } = useContextProvider();
  let currentTime = getCurrentTime();

  return (
    <nav className="fixed top-2 -right-20 w-full bg-transparent z-10 flex justify-center  ">
      <div className="flex gap-x-10 w-[900px]   h-[50px] max-w-[90%] items-center ">
        <div className="flex items-center justify-center gap-x-2 w-[180px] ">
          <span className="font-medium text-3xl">{data.batteryStatus}%</span>
          <div className="rotate-90">
            <MdBattery30 className="text-6xl text-gray-700" />
          </div>
        </div>

        <div
          onClick={() => setIsLockOpen(!isLockOpen)}
          className="text-xl cursor-pointer transition-all ease-in-out duration-500 delay-75 w-[70px]  flex items-center justify-center"
        >
          {isLockOpen ? (
            <FaLockOpen className="text-4xl" />
          ) : (
            <FaLock className="text-4xl" />
          )}
        </div>

        <div className="flex items-center justify-center   gap-x-4  min-w-[210px]  ">
          <img
            src={image}
            alt="Image"
            width={30}
            height={30}
            className="object-cover text-gray-500 "
          />
          <span className="text-3xl font-medium">{data.name}</span>
        </div>

        <div className="w-fit  ">
          <div className="h-5 w-5 rounded-full bg-transparent border-2 border-gray-200 ring-2 ring-black flex justify-center items-center ">
            <div className="border-4 border-black h-4 w-4 rounded-full"></div>
          </div>
        </div>

        <div className="w-fit  flex items-center justify-center ">
          <span className="font-medium text-3xl">{currentTime}</span>
        </div>

        <div className="w-fit  flex justify-center items-center">
          <span className="font-medium text-3xl ">{data.temperature}°C</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
