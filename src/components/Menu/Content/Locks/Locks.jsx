import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import childlockicon from "@/assets/childlockicon.png";
import windowicon from "@/assets/windowicon.png";
import { FaPlus } from "react-icons/fa6";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { PiWarningCircle } from "react-icons/pi";
import SwitchButton from "@/components/UIComponents/SwitchButton";
import CheckBox from "@/components/UIComponents/Checkbox";
import Buttons from "@/components/UIComponents/Buttons";

function Locks() {
  return (
    <div className="flex flex-col w-full max-w-[90%] ml-5 mt-5 ">
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
        <div className="w-full ">
          <SwitchButton
            heading={"Walk-Away Door Lock"}
            description={
              "Automatically lock doors and trunks when <br /> leaving with a phone or key fob"
            }
          />
          <CheckBox labell={"Exclude Home"} className={"ml-16"} />
        </div>

        <SwitchButton
          heading={"Driver Door Unlock Mode"}
          description={
            "Only unlock the driver door when first unlocking the vehicle"
          }
        />

        <SwitchButton heading={"Unlock on Park"} />
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <div className="w-full">
        <Buttons
          heading={"Car Left Open Notifications"}
          warning={true}
          btn1={"Off"}
          btn2={"Doors"}
          btn3={"Doors & Windows"}
        />
        <CheckBox labell={"Exclude Home"} className={"mb-2"} />
        <p className="mb-5">You will not be notified if your car is left open</p>
      </div>

      <SwitchButton heading={"Lock Confirmation Sound"}  />
      <SwitchButton heading={"Close Windows on Lock"} className={'mb-8'}/>
    </div>
  );
}

export default Locks;
