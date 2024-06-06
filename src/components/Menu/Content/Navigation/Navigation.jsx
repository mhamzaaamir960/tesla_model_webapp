import SwitchButton from "@/components/UIComponents/SwitchButton";
import React, { useState } from "react";
import { FaVolumeXmark, FaVolumeHigh, FaPlus, FaMinus } from "react-icons/fa6";

function Navigation() {
  const [volume, setVolume] = useState(false);
  const [vol, setVol] = useState(50);
  const [counter, setCounter] = useState(5);
  return (
    <div className="flex flex-col w-full justify-start ml-5 mt-5 ">
      <div className="flex flex-col gap-y-2 mb-10">
        <span className="font-medium">Navigation Volume </span>
        <div className="w-[50%]  flex justify-between ">
          <div className="w-[75%] py-4 px-3 border rounded bg-gray-200">
            <div className="flex items-center gap-x-4 text-xl">
              <FaMinus
                onClick={() => setVol(vol - 5)}
                className="cursor-pointer"
              />
              <div className={`h-2 rounded w-full bg-gray-400 `}>
                <div
                  className={`w-[${vol}%] h-full rounded   ${
                    volume === true && "bg-gray-800"
                  }`}
                />
              </div>
              <FaPlus
                onClick={() => setVol(vol + 5)}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div
            onClick={() => setVolume(!volume)}
            className="w-[20%] flex items-center justify-center  py-4 px-6 bg-gray-200"
          >
            <div className="text-2xl cursor-pointer">
              {volume ? <FaVolumeHigh className="" /> : <FaVolumeXmark />}
            </div>
          </div>
        </div>
      </div>

      <SwitchButton
        heading={"Automatic Navigation"}
        description={`Automatically route to Home, Work or next  calendar event upon entry.`}
      />
      <SwitchButton
        heading={"Trip Planner"}
        description={`Adds Supercharger stops if neccessary.`}
      />
      <SwitchButton
        heading={"Online Routing"}
        description={`Finds optimal route based on traffic conditions.`}
      />

      <div className="flex  flex-col  items-center gap-y-2 w-[55%]  mt-4  mb-10">
        <p className="mr-40">Route to save</p>
        <div className="min-w-[250px] p-2 flex   items-center justify-between border bg-gray-200 rounded">
          <FaMinus
            onClick={() => setCounter(counter - 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span className="font-medium">+{counter} min</span>

          <FaPlus
            onClick={() => setCounter(counter + 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>

      <SwitchButton heading={"Avoid Ferries"} />
      <SwitchButton heading={"Avoid Tolls"} />
      <SwitchButton heading={"Use HOV Lanes"} />

      <div className="mb-10" />
    </div>
  );
}

export default Navigation;
