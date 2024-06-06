import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

function Buttons({ heading, btn1, btn2, btn3, btn4 }) {
  return (
    <div className="flex flex-col  gap-y-2  items-start my-5 gap-x-10 w-full ">
      {heading && <span className="font-medium">{heading}</span>}
      <ToggleGroup type="single" className=" w-fit rounded-2xl border rounded">
        {btn1 && (
          <ToggleGroupItem
            value={btn1}
            className="w-[150px] py-6 flex gap-x-2  text-gray-500 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            <span>{btn1}</span>
          </ToggleGroupItem>
        )}
        {btn2 && (
          <ToggleGroupItem
            value={btn2}
            className="w-[150px] py-6 flex gap-x-2 text-gray-500 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            <span>{btn2}</span>
          </ToggleGroupItem>
        )}

        {btn3 && (
          <ToggleGroupItem
            value={btn3}
            cclassName="w-[150px] py-6 flex gap-x-2  text-gray-500 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            {btn3}
          </ToggleGroupItem>
        )}

        {btn4 && (
          <ToggleGroupItem
            value={btn4}
            className="w-[150px] py-6 flex gap-x-2  text-gray-500 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            {btn4}
          </ToggleGroupItem>
        )}
      </ToggleGroup>
    </div>
  );
}

export default Buttons;
