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
  const { isLockOpen, setIsLockOpen, name, batteryStatus, temp } =
    useContextProvider();
  let currentTime = getCurrentTime();
  console.log(currentTime);

  return (
    <nav className="fixed top-0 w-full bg-transparent z-10 flex justify-center  ">
      <div className="flex gap-x-8 h-[50px] justify-center max-w-[90%] items-center mr-10">
        <div className="flex items-center gap-x-2">
          <span className="font-medium text-lg">{batteryStatus}%</span>
          <div className="rotate-90">
            <MdBattery30 className="text-4xl text-gray-700" />
          </div>
        </div>

        <div
          onClick={() => setIsLockOpen(!isLockOpen)}
          className="text-xl cursor-pointer transition-all ease-in-out duration-500 delay-75"
        >
          {isLockOpen ? <FaLockOpen /> : <FaLock />}
        </div>

        <div>
          <span className="font-medium">{currentTime}</span>
        </div>

        <div>
          <span className="font-medium">{temp}°C</span>
        </div>

        <div className="h-3 w-3 rounded-full bg-red-500 border-2 border-gray-200 ring-2 ring-red-500" />

        <div className="flex items-center  gap-x-4 ">
          <img
            src={image}
            alt="Image"
            width={18}
            height={18}
            className="object-cover text-gray-500 "
          />
          <span className="text-base font-medium">{name}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
