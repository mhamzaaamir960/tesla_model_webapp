import React from "react";
import Container from "@/components/UIComponents/Container";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import light from "@/assets/light.png";
import { PiHeadlightsLight } from "react-icons/pi";
import Buttons from "@/components/UIComponents/Buttons";
import SwitchButton from "@/components/UIComponents/SwitchButton";

function Lights() {
  return (
    <Container className={' ml-5'}>
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
