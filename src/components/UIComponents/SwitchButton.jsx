import React from "react";
import { Switch } from "../ui/switch";
import { PiWarningCircle } from "react-icons/pi";

function SwitchButton({ heading, warning, description, className }) {
  return (
    <div className={`flex flex-row  gap-x-4 rounded-lg p-2 my-2 ${className}  `}>
      <Switch />
      <div className="flex flex-col gap-y-1 items-start ">
        <div className="flex gap-x-2 items-center ">
          {heading && (
            <h4 className="text-3xl text-black font-medium">{heading}</h4>
          )}
          {warning === true && (
            <PiWarningCircle className="text-3xl  mr-2 text-gray-500" />
          )}
        </div>
        <p className="text-gray-500 text-2xl max-w-[90%]">{description}</p>
      </div>
    </div>
  );
}

export default SwitchButton;
