import React from "react";
import tesla from "@/assets/tesla.png";
import { MdBolt } from "react-icons/md";
import { useContextProvider } from "@/context/Context";
import { FaLockOpen, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TeslaCar() {
  const { isLockOpen, setIsLockOpen, setIsChargingRouteOpen } =
    useContextProvider();

  return (
    <div className="min-w-[40%] max-w-[40%] bg-gray-100 min-h-screen max-h-screen sticky top-0">
      <div className="">
        <div className="absolute top-64 left-0 ">
          <img src={tesla} alt="tesla image" width={700} className="  " />
        </div>

        <div className="absolute top-[45%] right-8 cursor-pointer">
          <Link onClick={() => setIsChargingRouteOpen(true)} to={"/charging"}>
            <MdBolt className="text-5xl" />
          </Link>
        </div>

        <div className="absolute top-[26%] flex flex-col items-center gap-y-2 justify-center left-[23rem] ">
          <div
            onClick={() => setIsLockOpen(!isLockOpen)}
            className="cursor-pointer text-4xl"
          >
            {isLockOpen ? <FaLockOpen /> : <FaLock />}
          </div>
          <div className=" w-[0.005rem] h-[110px]  bg-gray-800" />
        </div>

        <div className="absolute top-[30%] flex  gap-x-2   justify-center right-28  ">
          <div className=" w-[0.005rem] h-[150px] mt-2  bg-gray-800" />
          <div className="flex flex-col items-center text-2xl cursor-pointer">
            <span>Trunk</span>
            <span className="font-medium">Open</span>
          </div>
        </div>

        <div className="absolute top-[34%] flex  gap-x-2 text-2xl justify-center left-16  ">
          <div className="flex flex-col items-center cursor-pointer">
            <span>Frunk</span>
            <span className="font-medium">Open</span>
          </div>
          <div className=" w-[0.005rem] h-[150px] mt-2  bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

export default TeslaCar;
