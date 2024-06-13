import React, { useState } from "react";
import { useContextProvider } from "@/context/Context";
import { IoCarSportSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  PiGreaterThanLight,
  PiLessThanLight,
  PiDotsThreeOutlineVerticalFill,
  PiNotepadFill,
} from "react-icons/pi";
import { TbAirConditioningDisabled, TbWiper } from "react-icons/tb";
import { FaPhoneAlt, FaSpotify } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { MdOutlineCamera } from "react-icons/md";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

function Footer() {
  const { setIsChargingRouteOpen } = useContextProvider();
  const [counter, setCounter] = useState(22);
  const [volume, setVolume] = useState(true);

  return (
    <div className="fixed bottom-0 bg-black h-[100px] w-full z-[60] flex justify-start items-center px-4 gap-x-40 ">
      <div className=" cursor-pointer ">
        <Link to={"/"} onClick={() => setIsChargingRouteOpen(true)}>
          <IoCarSportSharp className="text-white text-6xl" />
        </Link>
      </div>

      <div className="w-full max-w-[75%]  border-white flex justify-between items-center">
        <div className="flex flex-col  items-center">
          <div className="flex gap-x-10 items-center">
            <PiLessThanLight
              onClick={() => {
                setCounter(counter - 1);
              }}
              className="text-gray-300 text-2xl mt-2 "
            />
            <span className="text-gray-100 text-5xl font-medium">
              {counter}.0
            </span>
            <PiGreaterThanLight
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="text-gray-200 text-2xl mt-2"
            />
          </div>
          <div>
            <TbAirConditioningDisabled className="text-gray-300 text-4xl " />
          </div>
        </div>

        <div className="flex gap-x-12 items-center">
          <FaPhoneAlt className="text-green-500 text-5xl cursor-pointer" />
          <MdOutlineCamera className="text-stone-500 text-6xl cursor-pointer" />
          <FaSpotify className="text-green-500 text-5xl cursor-pointer" />
          <IoImageSharp className="text-green-500 rounded text-5xl cursor-pointer" />
          <TbWiper className="text-gray-100 text-5xl cursor-pointer" />
          <div className=" flex items-center justify-center rounded border">
            <PiDotsThreeOutlineVerticalFill className="text-gray-100 text-5xl cursor-pointer rotate-90 " />
          </div>
          <PiNotepadFill className="text-gray-100 text-6xl -rotate-90 cursor-pointer" />
        </div>

        <div className="flex gap-x-10 items-center">
          <PiLessThanLight
            onClick={() => {
              setCounter(counter - 1);
            }}
            className="text-gray-300 text-2xl  "
          />
          <div
            onClick={() => setVolume(!volume)}
            className=" flex items-center justify-center "
          >
            <div className="text-5xl cursor-pointer text-gray-100">
              {volume ? <FaVolumeHigh className="" /> : <FaVolumeXmark />}
            </div>
          </div>
          <PiGreaterThanLight
            onClick={() => {
              setCounter(counter + 1);
            }}
            className="text-gray-200 text-2xl "
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
