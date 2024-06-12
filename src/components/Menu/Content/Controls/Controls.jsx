import React from "react";
import Container from "@/components/UIComponents/Container";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import light from "@/assets/light.png";
import mirror from "@/assets/mirror.png";
import wiper from "@/assets/wiper.png";
import glovebox from "@/assets/glovebox.png";
import childlockicon from "@/assets/childlockicon.png";
import windowicon from "@/assets/windowicon.png";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { IoCarSportSharp } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";
import { TbBulb } from "react-icons/tb";
import {
  PiHeadlightsLight,
  PiHeadlights,
  PiScreencastLight,
  PiArrowsOutSimpleBold,
} from "react-icons/pi";

function Controls({ className, ...props }) {
  return (
    <Container className={""}>
      {/* 1 */}

      <div className="flex justify-between h-[80px] border w-full mt-5">
        <ToggleGroup type="single" className="h-full w-full flex justify-start">
          <ToggleGroupItem
            value="off"
            className="w-[130px] h-full rounded-l border border-gray-300  flex  items-center"
          >
            <div className=" flex gap-x-2 rounded-l items-center ">
              <TbBulb className="scale-y-[-1] text-5xl  text-gray-700" />
              <span className="text-2xl">off</span>
            </div>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="b"
            className="w-[130px] h-full border border-gray-300"
          >
            <div className=" flex gap-x-2 border rounded-l items-center ">
              <img
                src={light}
                alt="light icon"
                width={40}
                height={40}
                style={{}}
              />
            </div>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="c"
            className="w-[130px] h-full border border-gray-300"
          >
            <PiHeadlightsLight className="scale-x-[-1] text-4xl text-gray-800" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="auto"
            className="w-[130px] h-full border border-gray-300 text-2xl rounded-r"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
        <Toggle
          className={`w-[130px] border border-gray-300 h-full data-[state=on]:bg-blue-500 data-[state=on]:text-white border rounded`}
        >
          <div className="relative top-0 ">
            <PiHeadlights className="scale-x-[-1] data-[state=on]:text-white text-5xl " />
            <span className="absolute top-3 left-[1.6rem] font-medium text-[1.4rem]">
              A
            </span>
          </div>
        </Toggle>
      </div>

      <div className="flex justify-between h-[160px] w-full  mt-8 ">
        <ToggleGroup type="single" className=" rounded-2xl">
          <ToggleGroupItem
            value="fold mirrors"
            className="h-full w-[230px] border border-gray-300 rounded-l"
          >
            <div className="flex flex-col items-center gap-y-1 ">
              <img src={mirror} alt="mirror icon" width={50} height={50} />
              <span className="text-xl flex flex-col">Fold Mirrors</span>
            </div>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="child lock"
            className="h-full w-[230px] border border-gray-300"
          >
            <div className="flex flex-col items-center gap-y-1 ">
              <img
                src={childlockicon}
                alt="child lock icon"
                width={50}
                height={50}
              />
              <span className="text-xl flex flex-col">Child Lock</span>
            </div>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="window lock"
            className="h-full w-[230px] border border-gray-300 rounded-r"
          >
            <div className="flex flex-col items-center gap-y-1 ">
              <img src={windowicon} alt="window icon" width={50} height={50} />
              <span className="text-xl flex flex-col">Window Lock</span>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex justify-between h-[100px]  mt-8 w-full ">
        <ToggleGroup type="single" className=" w-fit rounded-2xl">
          <ToggleGroupItem
            value="off"
            className="w-[135px] h-full rounded-l border border-gray-300  flex  items-center"
          >
            <div className="flex justify-center items-center">
              <img src={wiper} alt="wiper icon" width={80} height={80} />
              <span className="text-xl">off</span>
            </div>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="auto"
            className="w-[135px]  text-2xl font-medium h-full rounded-l border border-gray-300  flex  items-center"
          >
            Auto
          </ToggleGroupItem>

          <ToggleGroupItem
            value="|"
            className="w-[105px] h-full rounded-l border border-gray-300 text-2xl  flex  items-center"
          >
            |
          </ToggleGroupItem>

          <ToggleGroupItem
            value="||"
            className="w-[105px] h-full rounded-l border border-gray-300 text-2xl  flex  items-center"
          >
            ||
          </ToggleGroupItem>
          <ToggleGroupItem
            value="|||"
            className="w-[105px] h-full rounded-l border border-gray-300 text-2xl  flex  items-center"
          >
            |||
          </ToggleGroupItem>
          <ToggleGroupItem
            value="||||"
            className="w-[105px] h-full rounded-l border border-gray-300 text-2xl  flex  items-center"
          >
            ||||
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex gap-x-2 w-full justify-between">
        <div className="flex flex-col justify-center  mt-8  h-[280px]   ">
          <ToggleGroup
            type="single"
            className=" rounded-2xl flex flex-col justify-between gap-x-8  h-full"
          >
            <ToggleGroupItem
              value="fold mirrors"
              className="w-[210px] h-[50%] border border-gray-300 rounded-t"
            >
              <div className="flex items-center flex-col items-center justify-center gap-y-2 ">
                <div className="flex items-center justify-center ">
                  <div className="w-10 h-10 mt-2">
                    <img
                      src={mirror}
                      alt="mirror icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <PiArrowsOutSimpleBold className="text-2xl font-bold -rotate-45" />
                </div>

                <span className="text-xl ">Mirrors</span>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem
              value="child lock"
              className="w-[210px] h-[50%] border border-gray-300 rounded-t"
            >
              <div className="flex flex-col justify-center items-center gap-y-2 ">
                <div className="flex gap-x-2 items-center">
                  <GiSteeringWheel className="text-4xl" />
                  <PiArrowsOutSimpleBold className="text-2xl font-bold -rotate-45" />
                </div>
                <span className="text-xl ">Steering</span>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col justify-center  mt-8  h-[280px]   ">
          <ToggleGroup
            type="single"
            className=" rounded-2xl flex flex-col justify-between gap-x-8  h-full"
          >
            <ToggleGroupItem
              value="fold mirrors"
              className="w-[210px] h-[50%] border border-gray-300 rounded-t"
            >
              <div className="flex flex-col items-center gap-y-2 ">
                <PiScreencastLight className="text-4xl" />
                <span className="text-xl ">Recording</span>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem
              value="child lock"
              className="w-[210px] h-[50%] border border-gray-300 rounded-t"
            >
              <div className="flex flex-col justify-center items-center gap-y-2 ">
                <div className="w-5 h-5 ring-2 ring-red-500 border-2 border-gray-100 rounded-full bg-red-500" />
                <span className="text-xl ">Sentry</span>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col justify-center  mt-8 h-[280px]   ">
          <ToggleGroup
            type="single"
            className=" rounded-2xl flex flex-col justify-between gap-x-8  h-full"
          >
            <ToggleGroupItem
              value="fold mirrors"
              className="w-[210px] h-[50%] border border-gray-300 rounded-t"
            >
              <div className="flex flex-col items-center gap-y-2 ">
                <IoCarSportSharp className="text-4xl" />
                <span className="text-xl ">Car Wash</span>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem
              value="child lock"
              className="w-[210px] h-[50%] border border-gray-300 rounded-t"
            >
              <div className="flex flex-col justify-center items-center  ">
                <img src={glovebox} alt="mirror icon" width={50} height={50} />
                <span className="text-xl ">Glove Box</span>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className=" flex justify-between gap-x-4  mt-8 w-full h-[90px] ">
        <Slider
          defaultValue={[70]}
          max={100}
          step={10}
          className={cn("w-[80%] border border-gray-300 rounded p-4", className)}
          {...props}
        />
        <Toggle
          className={`p-7 bg-blue-500 text-white data-[state=on]:bg-gray-200 data-[state=on]:text-black border rounded  h-full  `}
        >
          <div className="h-full w-[80px] ">
            <span className="text-2xl font-medium">Auto</span>
          </div>
        </Toggle>
      </div>
    </Container>
  );
}

export default Controls;
