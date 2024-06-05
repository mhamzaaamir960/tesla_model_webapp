import React from "react";
import { FaPlus } from "react-icons/fa6";

function Locks() {
  return (
    <div className="flex flex-col w-full  p-4">
      <div className="flex justify-between items-center">
        <span className="font-medium text-lg">Keys</span>
        <div className="bg-gray-200 p-4 rounded cursor-pointer">
          <FaPlus className=" text-lg text-gray-700 " />
        </div>
      </div>
      <span className="flex w-full justify-center text-gray-800">
        No keys available
      </span>
      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />
    </div>
  );
}

export default Locks;
