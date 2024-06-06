import React from "react";
import { Switch } from "../ui/switch";
import { PiWarningCircle } from "react-icons/pi";

function SwitchButton({ heading, warning, description }) {
  return (
    <div className="flex flex-row  gap-x-4 rounded-lg p-2  ">
      <Switch />
      <div className="flex flex-col gap-y-1 items-start ">
        <div className="flex gap-x-2 items-center ">
          {heading && (
            <h4 className="text-base text-black font-medium">{heading}</h4>
          )}
          {warning === true && (
            <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
          )}
        </div>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default SwitchButton;
