import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import light from "@/assets/light.png";
import { PiHeadlightsLight } from "react-icons/pi";
import { TbBulb } from "react-icons/tb";

function Controls() {
  return (
    <div>
      <div>
        <ToggleGroup type="single" className="border w-fit">
          <ToggleGroupItem value="a">
            <TbBulb className="scale-y-[-1] text-xl  text-gray-700" />
          </ToggleGroupItem>
          <ToggleGroupItem value="b">
            <img src={light} alt="light icon" width={20} style={{}} />

          </ToggleGroupItem>
          <ToggleGroupItem value="c" className="">
            <PiHeadlightsLight className="scale-x-[-1] text-xl text-gray-800" />
          </ToggleGroupItem>
          <ToggleGroupItem value="auto">Auto</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}

export default Controls;
