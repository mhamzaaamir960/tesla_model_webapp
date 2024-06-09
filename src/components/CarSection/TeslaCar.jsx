import React from "react";
import tesla from "@/assets/tesla.png";
import { MdBolt } from "react-icons/md";
import { useContextProvider } from "@/context/Context";
import { FaLockOpen, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TeslaCar() {
  const { isLockOpen, setIsLockOpen, isChargingRouteOpen, setIsChargingRouteOpen } =
    useContextProvider();

  return (
    <div className="min-w-[40%] max-w-[40%] bg-gray-100 min-h-screen max-h-screen sticky top-0">
      <div className=" ">
        <div className="absolute top-10 left-0">
          <img
            src={tesla}
            alt="tesla image"
            className="w-[2000px] h-[600px] rotate-3 "
          />
        </div>

        <div className="absolute top-[41%] right-28 cursor-pointer">
          <Link onClick={() => setIsChargingRouteOpen(true)} to={"/charging"}>
            <MdBolt className="text-2xl" />
          </Link>
        </div>

        <div className="absolute top-[24%] flex flex-col items-center gap-y-2 justify-center left-72 ">
          <div
            onClick={() => setIsLockOpen(!isLockOpen)}
            className="cursor-pointer text-xl"
          >
            {isLockOpen ? <FaLockOpen /> : <FaLock />}
          </div>
          <div className=" w-[0.005rem] h-[60px]  bg-gray-800" />
        </div>

        <div className="absolute top-[24%] flex  gap-x-2   justify-center right-40  ">
          <div className=" w-[0.005rem] h-[80px] mt-2  bg-gray-800" />
          <div className="flex flex-col items-center cursor-pointer">
            <span>Trunk</span>
            <span className="font-medium">Open</span>
          </div>
        </div>

        <div className="absolute top-[40%] flex  gap-x-2   justify-center left-36  ">
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
