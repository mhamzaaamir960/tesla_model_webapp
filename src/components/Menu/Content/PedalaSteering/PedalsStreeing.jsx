import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";

function PedalsStreeing() {
  return (
    <div className="min-h-[75vh] h-full flex flex-col items-center w-full">
      {/* 1 */}
      <div className="flex flex-col max-w-[530px] justify-center items-start mt-6 gap-x-10 w-full ml-10 gap-y-2">
        <h4 className="text-base font-medium">Acceleration</h4>
        <ToggleGroup type="single" className=" w-fit flex justify-start     ">
          <ToggleGroupItem
            value="chill"
            className="p-7 flex gap-x-2 border rounded-l w-[150px] data-[state=on]:bg-white"
          >
            Chill
          </ToggleGroupItem>

          <ToggleGroupItem
            value="standard"
            className="text-md p-7 border rounded-r w-[150px] data-[state=on]:bg-white"
          >
            Standard
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* 2 */}
      <div className="flex flex-col max-w-[530px] justify-center items-start mt-6 gap-x-10 w-full ml-10 gap-y-2">
        <h4 className="text-base font-medium">Steering Mode</h4>
        <ToggleGroup type="single" className=" w-fit flex justify-start     ">
          <ToggleGroupItem
            value="Comfort"
            className="p-7 flex gap-x-2 border rounded-l w-[150px] data-[state=on]:bg-white"
          >
            Comfort
          </ToggleGroupItem>

          <ToggleGroupItem
            value="standard"
            className="text-md p-7 border rounded-r w-[150px] data-[state=on]:bg-white"
          >
            Standard
          </ToggleGroupItem>
          <ToggleGroupItem
            value="sport"
            className="text-md p-7 border rounded-r w-[150px]  data-[state=on]:bg-white"
          >
            Sport
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* 3 */}
      <div className="flex flex-col max-w-[530px] justify-center items-start mt-6 gap-x-10 w-full ml-10 gap-y-2">
        <h4 className="text-base font-medium">Stopping Mode</h4>
        <ToggleGroup type="single" className=" w-fit flex justify-start     ">
          <ToggleGroupItem
            value="creep"
            className="p-7 flex gap-x-2 border rounded-l w-[150px] data-[state=on]:bg-white"
          >
            Creep
          </ToggleGroupItem>

          <ToggleGroupItem
            value="roll"
            className="text-md p-7 border rounded-r w-[150px] data-[state=on]:bg-white"
          >
            Roll
          </ToggleGroupItem>
          <ToggleGroupItem
            value="hold"
            className="text-md p-7 border rounded-r w-[150px]  data-[state=on]:bg-white"
          >
            Hold
          </ToggleGroupItem>
        </ToggleGroup>
        <p>
          Maximizes range by extending regenerative braking to lower speeds and
          automatically blends in brakes to hold the vehicle at a stop
        </p>
      </div>

      <div className="flex flex-row items-start justify-center rounded-lg p-2  mt-10">
        <Switch className="" />
        <div className=" ml-4">
          <h4 className="text-base text-black font-medium">Slip Start</h4>
          <p className="text-base text-gray-500 ">
            Use to help free vehicle stuck in snow, sand, or mud.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PedalsStreeing;
