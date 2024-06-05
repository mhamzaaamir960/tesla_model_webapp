import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PiWarningCircle } from "react-icons/pi";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Autopilot() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className="w-full  ml-6 mt-2 flex flex-col gap-y-2 ">
      <div className="flex flex-row items-center rounded-lg p-2 ">
        <Switch />
        <div className="ml-4">
          <h4 className="text-base text-black font-medium">Autosteer (Beta)</h4>
        </div>
      </div>

      <div className="flex flex-row items-center rounded-lg p-2 ">
        <Switch className="" />
        <div className="ml-4">
          <h4 className="text-base text-black font-medium">
            Full Self-Driving Visualization Preview
          </h4>
        </div>
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <div className="flex flex-col max-w-[530px] justify-start items-start gap-y-5 w-full ">
        <div className="flex gap-x-2 items-center">
          <span className="text-base font-medium">Set Speed</span>
          <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
        </div>
        <ToggleGroup type="single" className=" w-full flex justify-start    ">
          <ToggleGroupItem
            value="speed limit"
            className="px-12 py-6 bg-gray-100 flex gap-x-2 border rounded-l min-w-[170px] data-[state=on]:bg-white border"
          >
            Speed Limit
          </ToggleGroupItem>

          <ToggleGroupItem
            value="current speed"
            className="text-md px-12 py-6 bg-gray-100 border rounded-r min-w-[170px] data-[state=on]:bg-white border "
          >
            Current Speed
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col max-w-[530px] justify-start items-start gap-y-5 w-full mt-4 ">
        <div className="flex gap-x-2 items-center">
          <span className="text-base font-medium">Offset</span>
          <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
        </div>
        <ToggleGroup type="single" className=" w-full flex justify-start    ">
          <ToggleGroupItem
            value="fixed"
            className="px-12 py-6 bg-gray-100 flex gap-x-2 border rounded-l min-w-[150px] data-[state=on]:bg-white border"
          >
            Fixed
          </ToggleGroupItem>

          <ToggleGroupItem
            value="percentage"
            className="text-md px-12 py-6 bg-gray-100 border rounded-r min-w-[150px] data-[state=on]:bg-white border "
          >
            Percentage
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex w-[65%]  mt-4 ">
        <div className="min-w-[300px]  self-start p-2 flex items-center justify-between border bg-gray-200 rounded">
          <FaMinus
            onClick={() => setCounter(counter - 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span className="font-medium">+{counter} km/h</span>

          <FaPlus
            onClick={() => setCounter(counter + 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <div className="flex flex-row gap-x-4 items-center rounded-lg p-2 ">
        <Switch />
        <div>
          <h4 className="text-base text-black font-medium">
            Automatic Blind Spot Camera
          </h4>
          <p>Show side repeater camera when turn signal is engaged</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-4 rounded-lg p-2 ">
        <Switch />
        <div className="flex gap-x-2 items-center ">
          <h4 className="text-base text-black font-medium">
            Blind Spot Collision Warining Chime
          </h4>
          <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
        </div>
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <div className="flex flex-col max-w-[530px] justify-start items-start gap-y-3 w-full ">
        <span className="text-base font-medium">Speed Limit Warning</span>

        <ToggleGroup type="single" className=" w-full flex justify-start    ">
          <ToggleGroupItem
            value="off"
            className="px-8 py-6 bg-gray-100 flex gap-x-2 border rounded-l min-w-[150px] data-[state=on]:bg-white border"
          >
            Off
          </ToggleGroupItem>

          <ToggleGroupItem
            value="display"
            className="text-md px-8 py-6 bg-gray-100 border rounded-r min-w-[150px] data-[state=on]:bg-white border "
          >
            Display
          </ToggleGroupItem>
          <ToggleGroupItem
            value="chime"
            className="text-md px-8 py-6 bg-gray-100 border rounded-r min-w-[150px] data-[state=on]:bg-white border "
          >
            Chime
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col max-w-[530px] justify-start items-start gap-y-3 w-full mt-4">
        <span className="text-base font-medium">Speed Limit</span>

        <ToggleGroup type="single" className=" w-full flex justify-start    ">
          <ToggleGroupItem
            value="relative"
            className="px-8 py-6 bg-gray-100 flex gap-x-2 border rounded-l min-w-[150px] data-[state=on]:bg-white border"
          >
            Relative
          </ToggleGroupItem>

          <ToggleGroupItem
            value="absolute"
            className="text-md px-8 py-6 bg-gray-100 border rounded-r min-w-[150px] data-[state=on]:bg-white border "
          >
            Absolute
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex  flex-col gap-y-2 w-[65%]  mt-4  mb-10">
        <span className="font-medium ">Offset</span>
        <div className="min-w-[250px]  self-start p-2 flex items-center justify-between border bg-gray-200 rounded">
          <FaMinus
            onClick={() => setCounter2(counter2 - 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span className="font-medium">+{counter2} km/h</span>

          <FaPlus
            onClick={() => setCounter2(counter2 + 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>
    </div>
  );
}

export default Autopilot;
