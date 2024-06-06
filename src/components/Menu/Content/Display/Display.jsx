import React from "react";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SelectBar from "@/components/UIComponents/Select";
import Buttons from "@/components/UIComponents/Buttons";

function Display({ className, ...props }) {
  return (
    <div className="w-full flex flex-col items-start ml-4">
      <div className="flex flex-col  gap-y-2  items-start mt-5 gap-x-10 w-full ">
        <span className="font-medium">Appearance</span>
        <ToggleGroup
          type="single"
          className=" w-fit rounded-2xl border rounded"
        >
          <ToggleGroupItem
            value="light"
            className="px-8 py-6 flex gap-x-2 w-fit  rounded-l  data-[state=on]:bg-white"
          >
            <span>Light</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="dark"
            className="px-8 py-6 flex gap-x-2 w-fit  rounded-l  data-[state=on]:bg-white"
          >
            <span>Dark</span>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="auto"
            className="text-md px-8 py-6  rounded-r data-[state=on]:bg-white"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="mt-5 flex flex-col gap-y-2">
        <span className="font-medium">Brightness</span>
        <div className="w-[525px] flex justify-between gap-x-4 ">
          <Slider
            defaultValue={[70]}
            max={100}
            step={10}
            className={cn("w-[80%] border rounded p-4", className)}
            {...props}
          />
          <Toggle
            className={`p-7 bg-blue-500 text-white data-[state=on]:bg-gray-100 data-[state=on]:text-black border rounded`}
          >
            <div className=" ">
              <span className="">Auto</span>
            </div>
          </Toggle>
        </div>
      </div>

      <div className="border bg-gray-200 py-2 px-10 rounded my-5">
        <button className="font-medium">Screen Clean Mode</button>
      </div>

      <SelectBar
        heading={"Touchscreen Language"}
        description={"Show display in this language"}
      />
      <SelectBar
        heading={"Voice Recognition Language"}
        description={"Recognize commands in this language"}
      />
      <SelectBar
        heading={"Voice Navigation Language"}
        description={"Speak instructions in this language"}
        className={"mb-5"}
      />

      <Buttons heading={"Time"} btn1={"12 Hour"} btn2={"24 Hour"} />
      <Buttons
        heading={"Energy Display"}
        btn1={"Percentage"}
        btn2={"Distance"}
      />
      <Buttons heading={"Distance"} btn1={"Kilometers"} btn2={"Miles"} />
      <Buttons heading={"Temprature"} btn1={"C"} btn2={"F"} />
      <Buttons heading={"Tire Pressure"} btn1={"Bar"} btn2={"PSI"} />
    </div>
  );
}

export default Display;
