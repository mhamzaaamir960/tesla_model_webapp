import React from "react";
import { useContextProvider } from "@/context/Context";
import { IoCarSportSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  const { setIsChargingRouteOpen } = useContextProvider();
  return (
    <div className="fixed bottom-0 bg-black h-[80px] w-full z-[60] flex justify-center items-center p-2">
      <div className="flex justify-between w-full max-w-[95%] items-center">
        <div className=" cursor-pointer ">
          <Link to={"/"} onClick={() => setIsChargingRouteOpen(true)}>
            <IoCarSportSharp className="text-white text-6xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
