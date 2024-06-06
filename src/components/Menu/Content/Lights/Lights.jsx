import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";
import { TbBulb } from "react-icons/tb";
import light from "@/assets/light.png";
import { PiHeadlightsLight } from "react-icons/pi";
import { Switch } from "@/components/ui/switch";

function Lights() {
  return (
    <div className="w-full flex flex-col items-start ml-5 ">
      <div className="flex flex-col  gap-y-2  items-start mt-5 gap-x-10 w-full ">
        <span className="font-medium">Headlights</span>
        <ToggleGroup
          type="single"
          className=" w-fit rounded-2xl border rounded"
        >
          <ToggleGroupItem
            value="off"
            className="px-8 py-6 flex gap-x-2 w-fit  rounded-l  data-[state=on]:bg-white"
          >
            <span>Off</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="b"
            className="px-8 py-6 data-[state=on]:bg-white"
          >
            <img src={light} alt="light icon" width={24} style={{}} />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="c"
            className="px-8 py-6 data-[state=on]:bg-white "
          >
            <PiHeadlightsLight className="scale-x-[-1] text-3xl text-gray-800" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="auto"
            className="text-md px-8 py-6  rounded-r data-[state=on]:bg-white"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col  gap-y-2  items-start mt-5 gap-x-10 w-full ">
        <span className="font-medium">Dome Lights</span>
        <ToggleGroup
          type="single"
          className=" w-fit rounded-2xl border rounded"
        >
          <ToggleGroupItem
            value="off"
            className="px-8 py-6 flex gap-x-2 w-fit  rounded-l  data-[state=on]:bg-white"
          >
            <span>Off</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="on"
            className="px-8 py-6 flex gap-x-2 w-fit  rounded-l  data-[state=on]:bg-white"
          >
            <span>On</span>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="auto"
            className="text-md px-8 py-6  rounded-r data-[state=on]:bg-white"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-row items-center justify-start rounded-lg p-2 mt-4 ">
        <Switch />
        <div className=" ml-4">
          <h4 className="text-base text-black font-medium">Auto High Beam</h4>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start rounded-lg p-2 ">
        <Switch />
        <div className=" ml-4">
          <h4 className="text-base text-black font-medium">
            Headlights after Exit
          </h4>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start rounded-lg p-2 mb-10 ">
        <Switch />
        <div className=" ml-4">
          <h4 className="text-base text-black font-medium">
            Steering Wheel Lights
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Lights;
