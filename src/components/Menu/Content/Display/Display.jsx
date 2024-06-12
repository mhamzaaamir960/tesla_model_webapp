import React from "react";
import { useContextProvider } from "@/context/Context";
import Container from "@/components/UIComponents/Container";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SelectBar from "@/components/UIComponents/Select";
import Buttons from "@/components/UIComponents/Buttons";
import Form from "@/components/DataChange/Form";
import { CiMenuKebab } from "react-icons/ci";

function Display({ className, ...props }) {
  const { name, setName, batteryStatus, setBateryStatus, temp, setTemp } =
    useContextProvider();
  return (
    <Container className={"ml-5 relative top-0"}>
      <Buttons
        heading={"Appearance"}
        btn1={"Light"}
        btn2={"Dark"}
        btn3={"Auto"}
      />

      <div className="mt-5 flex flex-col gap-y-2">
        <span className="font-medium text-2xl">Brightness</span>
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
              <span className="text-2xl">Auto</span>
            </div>
          </Toggle>
        </div>
      </div>

      <div className="border flex justify-center gap-x-2 bg-gray-200 py-2 w-[250px] rounded my-5 h-[60px]">
        <button className="font-medium text-xl">Screen Clean Mode</button>
        <Form TriggerIcon={<CiMenuKebab className="bg-none text-xl" />} />
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
        className={" my-0"}
      />
      <Buttons heading={"Distance"} btn1={"Kilometers"} btn2={"Miles"} />
      <Buttons
        heading={"Temprature"}
        btn1={"C"}
        btn2={"F"}
        className={" my-0"}
      />

      <Buttons
        heading={"Tire Pressure"}
        btn1={"Bar"}
        btn2={"PSI"}
        className={" mb-5"}
      />
    </Container>
  );
}

export default Display;
