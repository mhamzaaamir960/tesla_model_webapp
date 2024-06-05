import React, { useState } from "react";
import teslabattery from "@/assets/teslabattery.png";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MdLocationOn } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Charging() {
  const [counter, setCounter] = useState(32);
  return (
    <div className="w-full flex flex-col items-center mb-40">
      <div className="relative top-0 flex justify-between w-full">
        <div className="flex w-full justify-center">
          <img
            src={teslabattery}
            alt="tesla battery"
            className="object-cover"
            height={300}
          />
        </div>
        <span className="absolute top-8 left-10 text-3xl font-semibold">
          30%
        </span>
      </div>

      <div className="flex flex-col max-w-[530px] justify-center items-start mt-4 gap-x-10 w-full ml-10 gap-x-4 ">
        <ToggleGroup
          type="single"
          className=" w-full flex gap-x-6 justify-center    "
        >
          <ToggleGroupItem
            value="open charge port"
            className="px-12 py-6 bg-gray-200 flex gap-x-2 border rounded-l min-w-[170px] data-[state=on]:bg-white"
          >
            Open Charge Port
          </ToggleGroupItem>

          <ToggleGroupItem
            value="unlock charge port"
            className="text-md px-12 py-6 bg-gray-200 border rounded-r min-w-[170px] data-[state=on]:bg-white"
          >
            Unlock Charge Port
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="w-[65%] ml-4 flex flex-col   mt-8">
        <h4 className="flex items-center gap-x-2">
          <MdLocationOn className="text-xl font-bold" />
          <span className="text-base font-medium">
            Charge Current at this location
          </span>
        </h4>
      </div>

      <div className="flex w-[65%] ml-4 mt-4 ">
        <div className="min-w-[200px]  self-start p-2 flex items-center justify-between border bg-gray-200">
          <FaMinus
            onClick={() => setCounter(counter - 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span>{counter} A</span>

          <FaPlus
            onClick={() => setCounter(counter + 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>

      <div className="w-[65%] ml-4 flex flex-col   mt-8">
        <h4 className="flex items-center gap-x-2">
          <MdLocationOn className="text-xl font-bold" />
          <span className="text-base font-medium">
            Scheduled Departure at this location
          </span>
        </h4>
        <div className="flex flex-col gap-y-2">
          <button className="border text-base cursor-pointer font-medium w-[200px] px-6 py-2 rounded flex justify-center items-center mt-4">
            Schedule
          </button>
          <span className="font-medium ">
            Switch to Scheduled Charging{">"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-1 justify-start w-[65%] ml-4 mt-4 ">
        <span className="text-lg font-medium">Supercharging</span>
        <span className="text-lg font-medium my-2">CA$10.92</span>
        <span>
          Burnaby, BC <br /> Tue,22 Mar 10:56 am
        </span>
        <span className="mt-2 text-blue-600 font-medium mb-10">Supercharging Tips</span>
      </div>
    </div>
  );
}

export default Charging;
