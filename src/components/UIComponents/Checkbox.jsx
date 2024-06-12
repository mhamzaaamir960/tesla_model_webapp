import React from "react";
import { Checkbox } from "@/components/ui/checkbox";


function CheckBox({ labell , className}) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox id="terms" className="border-none bg-gray-300 size-5 " />
      {labell && (
        <label
          htmlFor="terms"
          className="text-xl font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {labell}
        </label>
      )}
    </div>
  );
}

export default CheckBox;
