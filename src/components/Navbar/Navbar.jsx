import React from "react";
import { MdBattery30 } from "react-icons/md";
import { FaLockOpen, FaLock } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="fixed top-0 flex gap-x-8 h-[50px] justify-center w-full items-center bg-transparent z-10">
      <div className="flex items-center gap-x-2">
        <span className="font-medium text-lg">30%</span>
        <div className="rotate-90">
          <MdBattery30 className="text-4xl text-gray-700" />
        </div>
      </div>

      <div className="text-xl">
        <FaLock />
      </div>

      <div>
        <span className="font-medium">1:26 am</span>
      </div>

      <div>
        <span className="font-medium">11 °C</span>
      </div>

      <div className="h-3 w-3 rounded-full bg-red-500 border-2 border-gray-200 ring-2 ring-red-500" />
    </div>
  );
}

export default Navbar;
