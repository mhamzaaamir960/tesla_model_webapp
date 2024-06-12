import React from "react";
import Container from "@/components/UIComponents/Container";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import light from "@/assets/light.png";
import { PiHeadlightsLight } from "react-icons/pi";
import Buttons from "@/components/UIComponents/Buttons";
import SwitchButton from "@/components/UIComponents/SwitchButton";

function Lights() {
  return (
    <Container>
      <div className="flex flex-col  gap-y-2 mb-4  gap-x-10 w-full  ">
        <span className="font-medium text-2xl">Headlights</span>
        <ToggleGroup
          type="single"
          className=" border rounded h-[80px] w-full flex justify-start"
        >
          <ToggleGroupItem
            value="off"
            className="w-[150px] h-full border border-gray-300 flex gap-x-2    rounded-l  data-[state=on]:bg-white"
          >
            <span className="text-2xl">Off</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="b"
            className="w-[150px] h-full border border-gray-300 data-[state=on]:bg-white"
          >
            <img src={light} alt="light icon" width={35} style={{}} />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="c"
            className="w-[150px] border border-gray-300 h-full data-[state=on]:bg-white "
          >
            <PiHeadlightsLight className="scale-x-[-1] text-4xl text-gray-800" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="auto"
            className="text-xl w-[150px] border border-gray-300 h-full rounded-r data-[state=on]:bg-white"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Buttons
        className={"max-w-[80%]"}
        heading={"Dome Lights"}
        btn1={"Off"}
        btn2={"On"}
        btn3={"Auto"}
      />

      <SwitchButton heading={"Headlights after Exit"} />
      <SwitchButton heading={"Headlights after Exit"} />
      <SwitchButton heading={"Steering Wheel Lights"} />
    </Container>
  );
}

export default Lights;
