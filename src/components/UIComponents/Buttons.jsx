import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { PiWarningCircle } from "react-icons/pi";
import { Toggle } from "../ui/toggle";

function Buttons({
  heading,
  btn1,
  btn2,
  btn3,
  btn4,
  warning,
  description,
  className,
}) {
  return (
    <div
      className={`${className} flex flex-col  gap-y-1  items-start my-5 gap-x-10 w-full `}
    >
      <div className="flex gap-x-2 items-center">
        {heading && <span className="font-medium">{heading}</span>}
        {warning === true && (
          <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
        )}
      </div>
      <ToggleGroup type="single" className="w-fit  border rounded">
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
            className="w-[150px] py-6 flex gap-x-2 text-gray-500 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            <span>{btn3}</span>
          </ToggleGroupItem>
        )}

        {btn4 && (
          <ToggleGroupItem
            value={btn4}
            className="w-[150px] py-6 flex gap-x-2  text-gray-500 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            <span>{btn4}</span>
          </ToggleGroupItem>
        )}
      </ToggleGroup>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Buttons;

export function AutoButton({ btn, className }) {
  return (
    <>
      {" "}
      {btn && (
        <Toggle
          className={` py-6 w-[100px] data-[state=on]:bg-blue-500 data-[state=on]:text-white border rounded ${className}`}
        >
          <div>
            <span className="">{btn}</span>
          </div>
        </Toggle>
      )}
    </>
  );
}

export function LongButtons({ btn1, btn2, btn3 }) {
  return (
    <ToggleGroup type="single" className="w-full flex justify-start gap-x-2 ">
      {btn1 && (
        <ToggleGroupItem className="data-[state=on]:bg-white">
          <button className="font-medium w-[220px]  bg-gray-200 py-3 rounded">
            {btn1}
          </button>
        </ToggleGroupItem>
      )}
      {btn2 && (
        <ToggleGroupItem className="data-[state=on]:bg-white">
          <button className="font-medium w-[220px] bg-gray-200  py-3 rounded">
            {btn2}
          </button>
        </ToggleGroupItem>
      )}
      {btn3 && (
        <ToggleGroupItem className="data-[state=on]:bg-white">
          <button className="font-medium w-[220px] bg-gray-200  py-3 rounded">
            {btn3}
          </button>
        </ToggleGroupItem>
      )}
    </ToggleGroup>
  );
}
