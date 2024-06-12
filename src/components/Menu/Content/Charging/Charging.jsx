import React, { useState } from "react";
import Container from "@/components/UIComponents/Container";
import { useContextProvider } from "@/context/Context";
import { MdLocationOn } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LongButtons } from "@/components/UIComponents/Buttons";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { PiPlugChargingFill } from "react-icons/pi";

function Charging({ className, ...props }) {
  const [counter, setCounter] = useState(16);
  const { data } = useContextProvider();
  return (
    <Container className={"gap-y-8"}>
      <div className="w-full">
        <span className="text-6xl text-gray-800 font-bold">
          {data.batteryStatus} %
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-xl shadow h-[480px]">
        <div className="px-4 py-6 ">
          <div className="w-full">
            <span className="font-medium text-2xl">
              Charge Limit: {data.batteryStatus}%{" "}
            </span>
          </div>

          <div className="w-full flex flex-col justify-start items-center  gap-x-3  gap-y-8">
            <div className="w-full flex text-xl font-medium gap-x-12 max-w-[76%] mt-16  h-[4px]">
              <span>|</span>
              <div className="flex flex-col items-center justify-center">
                <span>20</span>
                <span>|</span>
              </div>
              <span>|</span>
              <div className="flex flex-col items-center justify-center">
                <span>40</span>
                <span>|</span>
              </div>
              <span>|</span>
              <div className="flex flex-col items-center justify-center">
                <span>60</span>
                <span>|</span>
              </div>
              <span>|</span>
              <div className="flex flex-col items-center justify-center">
                <span>80</span>
                <span>|</span>
              </div>
              <span>|</span>
            </div>
            <Slider
              defaultValue={[data.batteryStatus]}
              max={100}
              step={10}
              cn1={"bg-gray-400 h-3"}
              cn2={"bg-green-500 "}
              cn3={"shadow bg-white"}
              cn4={"hidden"}
              className={cn("w-full border rounded p-4", className)}
              {...props}
            />
          </div>

          <div className="mt-16 flex gap-x-8 justify-center items-center">
            <div className="flex items-center gap-x-3">
              <PiPlugChargingFill className="text-black text-3xl" />
              <p className="text-3xl font-medium text-gray-800">
                Charge Current at <br /> this location
              </p>
            </div>
            <div className="min-w-[300px] h-[80px] rounded  self-start p-2 flex items-center justify-between  bg-gray-300">
              <FaMinus
                onClick={() => setCounter(counter - 1)}
                className="text-4xl text-gray-500 hover:text-gray-700 cursor-pointer "
              />
              <span className="text-3xl font-medium text-gray-800">
                {counter} A
              </span>

              <FaPlus
                onClick={() => setCounter(counter + 1)}
                className="text-4xl text-gray-500 hover:text-gray-700 cursor-pointer  "
              />
            </div>
          </div>
        </div>

        <div className="h-2 w-full bg-gray-300 mt-4" />
        <div className="w-full flex items-center justify-center  h-[85px]">
          <button className="text-2xl font-medium cursor-pointer">
            Open Charge Port
          </button>
        </div>
      </div>

      <div className="w-full  flex flex-col  mt-8 ">
        <h4 className="flex items-center gap-x-2">
          <MdLocationOn className="text-4xl font-bold" />
          <span className="text-2xl font-medium">
            Scheduled Departure at this location
          </span>
        </h4>
        <div className="flex flex-col gap-y-2 mt-4">
          <button className="border text-2xl cursor-pointer font-medium w-[300px]  py-2 rounded flex justify-center border-gray-300  items-center mt-4">
            Schedule
          </button>
          <span className="font-medium  text-xl">
            Switch to Scheduled Charging{">"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-1 w-full mb-28 ">
        <span className="text-3xl font-medium">Supercharging</span>
        <span className="text-3xl font-medium my-2">CA$10.92</span>
        <span className="text-2xl">
          Burnaby, BC <br /> Tue,22 Mar 10:56 am
        </span>
        {/* <span className="mt-2 text-blue-600 font-medium ">
          Supercharging Tips
        </span> */}
      </div>
    </Container>
  );
}

export default Charging;
