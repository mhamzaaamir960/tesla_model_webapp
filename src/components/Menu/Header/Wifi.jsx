import React from "react";
import { PiCellSignalFull } from "react-icons/pi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Wifi() {
  const handleWifi = () => {
    console.log("Clicked");
  };
  return (
    <DropdownMenu className=" h-full relative top-0">
      <DropdownMenuTrigger
        className={` data-[state=open]:bg-white  p-2`}
        asChild
      >
        <button onClick={handleWifi} className={`  `}>
          <PiCellSignalFull className="text-4xl text-gray-500 cursor-pointer" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute min-w-[400px] rounded rounded-r-none -top-1 -right-5 p-4 w-full">
        <DropdownMenuLabel className="text-gray-500 text-2xl">
          Searching for WiFi...
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="mb-4 bg-gray-300 " />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Wifi;
