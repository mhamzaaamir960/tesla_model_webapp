import React from "react";
import tesla from "@/assets/tesla.png";
import { MdBolt } from "react-icons/md";
import { FaLockOpen, FaLock } from "react-icons/fa6";

function TeslaCar() {
  return (
    <div className="min-w-[40%] max-w-[40%] border-2 min-h-screen max-h-screen sticky top-0">
      <div className=" ">
        <div className="absolute top-32 left-10">
          <img src={tesla} alt="tesla image" width={500} />
        </div>

        <div className="absolute top-[38%] right-20 cursor-pointer">
          <MdBolt className="text-2xl" />
        </div>

        <div className="absolute top-[22%] flex flex-col items-center gap-y-2 justify-center left-1/2 ">
          <FaLock className="text-xl cursor-pointer" />
          <div className=" w-[0.005rem] h-[60px]  bg-gray-800" />
        </div>

        <div className="absolute top-[22%] flex  gap-x-2   justify-center right-32  ">
          <div className=" w-[0.005rem] h-[80px] mt-2  bg-gray-800" />
          <div className="flex flex-col items-center cursor-pointer">
            <span>Trunk</span>
            <span className="font-medium">Open</span>
          </div>
        </div>

        <div className="absolute top-[37%] flex  gap-x-2   justify-center left-28  ">
          <div className="flex flex-col items-center cursor-pointer">
            <span>Frunk</span>
            <span className="font-medium">Open</span>
          </div>
          <div className=" w-[0.005rem] h-[90px] mt-2  bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

export default TeslaCar;
