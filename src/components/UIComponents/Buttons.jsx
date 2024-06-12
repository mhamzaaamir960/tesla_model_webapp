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
  img1,
  warning,
  description,
  className,
}) {
  return (
    <div
      className={`${className} flex flex-col gap-y-4 mb-6  items-start  gap-x-10 w-full`}
    >
      <div className="flex gap-x-2 items-center">
        {heading && <span className="font-medium text-3xl">{heading}</span>}
        {warning === true && (
          <PiWarningCircle className="text-3xl  mr-2 text-gray-800" />
        )}
      </div>
      <ToggleGroup type="single" className="w-fit h-[90px]  border rounded">
        {btn1 && (
          <ToggleGroupItem
            value={btn1}
            className="min-w-[170px] h-full  flex gap-x-2 border text-gray-800 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            {img1 && <img src={img1} alt="wiper icon" width={50} height={50} />}
            <span className="text-2xl font-medium">{btn1}</span>
          </ToggleGroupItem>
        )}
        {btn2 && (
          <ToggleGroupItem
            value={btn2}
            className="min-w-[170px] h-full py-6 flex gap-x-2 border text-gray-800 data-[state=on]:text-black   data-[state=on]:bg-white"
          >
            <span className="text-2xl font-medium">{btn2}</span>
          </ToggleGroupItem>
        )}

        {btn3 && (
          <ToggleGroupItem
            value={btn3}
            className="min-w-[170px] h-full flex gap-x-2 border text-gray-800 data-[state=on]:text-black  data-[state=on]:bg-white"
          >
            <span className="text-2xl font-medium">{btn3}</span>
          </ToggleGroupItem>
        )}

        {btn4 && (
          <ToggleGroupItem
            value={btn4}
            className="min-w-[170px] h-full  flex gap-x-2 border  text-gray-800 data-[state=on]:text-black rounded-l  data-[state=on]:bg-white"
          >
            <span className="text-2xl font-medium">{btn4}</span>
          </ToggleGroupItem>
        )}
      </ToggleGroup>
      {description && <p className="w-[80%] text-xl text-gray-800">{description}</p>}
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

export function LongButtons({ btn1, btn2, btn3, className }) {
  return (
    <ToggleGroup
      type="single"
      className={`w-full flex justify-start gap-x-2 ${className}`}
    >
      {btn1 && (
        <ToggleGroupItem className="data-[state=on]:bg-white ">
          <button className="font-medium text-2xl w-[300px] border  bg-gray-200 py-3 rounded">
            {btn1}
          </button>
        </ToggleGroupItem>
      )}
      {btn2 && (
        <ToggleGroupItem className="data-[state=on]:bg-white">
          <button className="font-medium text-2xl w-[300px] border bg-gray-200  py-3 rounded">
            {btn2}
          </button>
        </ToggleGroupItem>
      )}
      {btn3 && (
        <ToggleGroupItem className="data-[state=on]:bg-white">
          <button className="font-medium w-[220px] border bg-gray-200  py-3 rounded">
            {btn3}
          </button>
        </ToggleGroupItem>
      )}
    </ToggleGroup>
  );
}
