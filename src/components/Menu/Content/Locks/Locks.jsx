import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import childlockicon from "@/assets/childlockicon.png";
import windowicon from "@/assets/windowicon.png";
import { FaPlus } from "react-icons/fa6";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { PiWarningCircle } from "react-icons/pi";

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

      <div className="flex items-center my-10  ">
        <ToggleGroup
          type="single"
          className=" rounded-2xl flex justify-between gap-x-8  min-w-[525px]"
        >
          <ToggleGroupItem
            value="fold mirrors"
            className="py-6 rounded border rounded-l w-[250px] data-[state=on]:bg-white "
          >
            <div className="flex items-center justify-evenly gap-x-5  w-full ">
              <div className="w-10 h-10 mt-2">
                <img src={windowicon} alt="window icon" width={30} />
              </div>

              <span className="text-sm ">Window Lock</span>
            </div>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="child lock"
            className="py-6 rounded border rounded-l data-[state=on]:bg-white  w-[250px]"
          >
            <div className="flex items-center gap-x-5 flex items-center justify-evenly w-full ">
              <div className="w-10 h-10 mt-2">
                <img src={childlockicon} alt="child icon" width={25} />
              </div>
              <span className="text-sm shrink-0">Child Lock </span>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-4 ">
        <div className="flex flex-row items-start justify-start rounded-lg p-2">
          <Switch />
          <div className=" ml-4">
            <h4 className="text-base text-black font-medium">
              Walk-Away Door Lock
            </h4>
            <p className="text-base text-gray-500 ">
              Automatically lock doors and trunks when <br /> leaving with a
              phone or key fob
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="terms" className="border-none bg-gray-200 " />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Exclude Home
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start rounded-lg p-2 ">
          <Switch />
          <div className="ml-4">
            <h4 className="text-base text-black font-medium">
              Driver Door Unlock Mode
            </h4>
            <p className="text-base text-gray-500 ">
              Only unlock the driver door when first unlocking <br /> the
              vehicle
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start rounded-lg p-2 ">
          <Switch />
          <div className=" ml-4">
            <h4 className="text-base text-black font-medium">Unlock on Park</h4>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <div className="flex flex-col max-w-[530px] justify-start items-start gap-y-3 w-full mt-4">
        <div className="flex gap-x-2 items-center">
          <span className="text-base font-medium">
            Car Left Open Notifications
          </span>
          <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
        </div>

        <ToggleGroup type="single" className=" w-full flex justify-start    ">
          <ToggleGroupItem
            value="off"
            className="px-8 py-6 bg-gray-100 flex gap-x-2 border rounded-l w-[150px] data-[state=on]:bg-white border"
          >
            Off
          </ToggleGroupItem>

          <ToggleGroupItem
            value="doors"
            className="text-md px-8 py-6 bg-gray-100 border rounded-r w-[150px] data-[state=on]:bg-white border "
          >
            Doors
          </ToggleGroupItem>
          <ToggleGroupItem
            value="doors and windows"
            className="text-md px-8 py-6 bg-gray-100 border rounded-r w-[150px] data-[state=on]:bg-white border "
          >
            Doors & Windows
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id="terms" className="border-none bg-gray-200 " />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Exclude Home
          </label>
        </div>
        <p>You will not be notified if your car is left open</p>
      </div>

      <div className="flex flex-row items-center justify-start rounded-lg p-2 mt-4 ">
        <Switch />
        <div className=" ml-4">
          <h4 className="text-base text-black font-medium">
            Lock Confirmation Sound
          </h4>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start rounded-lg p-2 mb-10 ">
        <Switch />
        <div className=" ml-4">
          <h4 className="text-base text-black font-medium">
            Close Windows on Lock
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Locks;
