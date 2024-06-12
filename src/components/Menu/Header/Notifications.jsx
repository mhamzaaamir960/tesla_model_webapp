import React from "react";
import { IoIosNotifications } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Notifications() {
  const handleNotifications = () => {
    setClick(!click);
  };
  return (
    <DropdownMenu className=" h-full relative top-0 ">
      <DropdownMenuTrigger
        className={` data-[state=open]:bg-white  p-2`}
        asChild
      >
        <button onClick={handleNotifications} className={`  `}>
          <IoIosNotifications
            className={`text-4xl text-gray-500 cursor-pointer `}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -top-1 -right-40 mr-8 p-4 w-full">
        <DropdownMenuLabel className="text-balck font-medium text-lg">
          Alerts
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="mb-4" />
        <span className="text-gray-500 ">Active Alerts</span>
        <br />
        <p className="ml-10 w-fit">There are no active alerts</p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Notifications;
