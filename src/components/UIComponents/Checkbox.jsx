import React from "react";
import { Checkbox } from "@/components/ui/checkbox";


function CheckBox({ labell }) {
  return (
    <div className="flex items-center space-x-2 ">
      <Checkbox id="terms" className="border-none bg-gray-200 " />
      {labell && (
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {labell}
        </label>
      )}
    </div>
  );
}

export default CheckBox;
