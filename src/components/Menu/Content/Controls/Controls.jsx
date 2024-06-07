import React from "react";
import Container from "@/components/UIComponents/Container";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import light from "@/assets/light.png";
import mirror from "@/assets/mirror.png";
import wiper from "@/assets/wiper.png";
import glovebox from "@/assets/glovebox.png"
import childlockicon from "@/assets/childlockicon.png";
import windowicon from "@/assets/windowicon.png";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
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
    <Container className={'items-center'}>
      {/* 1 */}

      <div className="flex max-w-[530px] justify-between items-center mt-4 gap-x-10 w-full ">
        <ToggleGroup type="single" className=" w-fit rounded-2xl">
          <ToggleGroupItem
            value="off"
            className="p-7 flex gap-x-2 border rounded-l"
          >
            <TbBulb className="scale-y-[-1] text-3xl  text-gray-700" />
            <span>off</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="b" className="p-7  border">
            <img src={light} alt="light icon" width={24} style={{}} />
          </ToggleGroupItem>
          <ToggleGroupItem value="c" className="p-7  border">
            <PiHeadlightsLight className="scale-x-[-1] text-3xl text-gray-800" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="auto"
            className="text-md p-7 border rounded-r"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
        <Toggle
          className={`p-7 data-[state=on]:bg-blue-500 data-[state=on]:text-white border rounded`}
        >
          <div className="relative top-0 ">
            <PiHeadlights className="scale-x-[-1] data-[state=on]:text-white text-3xl " />
            <span className="absolute top-1 left-[1.08rem] font-medium text-[0.7rem]">
              A
            </span>
          </div>
        </Toggle>
      </div>

      {/* 2 */}
      <div className="flex justify-center items-center mt-4 ">
        <ToggleGroup type="single" className=" rounded-2xl">
          <ToggleGroupItem
            value="fold mirrors"
            className="p-11 border rounded-l"
          >
            <div className="flex flex-col items-center gap-y-1 ">
              <img src={mirror} alt="mirror icon" width={30} height={30} />
              <span className="text-sm flex flex-col">
                Fold <span>Mirrors</span>
              </span>
            </div>
          </ToggleGroupItem>

          <ToggleGroupItem value="child lock" className="p-11 border rounded-l">
            <div className="flex flex-col items-center gap-y-1 ">
              <img src={childlockicon} alt="child lock icon" width={25} />
              <span className="text-sm flex flex-col">
                Child <span>Lock</span>
              </span>
            </div>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="window lock"
            className="p-11 border rounded-l"
          >
            <div className="flex flex-col items-center gap-y-1 ">
              <img src={windowicon} alt="window icon" width={30} height={30} />
              <span className="text-sm flex flex-col">
                Window <span>Lock</span>
              </span>
            </div>
          </ToggleGroupItem>

          <ToggleGroupItem value="glove box" className="p-11 border rounded-l">
            <div className="flex flex-col items-center gap-y-1 ">
              <img src={glovebox} alt="mirror icon" width={35} height={35} />
              <span className="text-sm flex flex-col">
                Glove <span>Box</span>
              </span>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* 3 */}
      <div className="flex max-w-[530px] justify-between items-center mt-4 gap-x-10 w-full ">
        <ToggleGroup type="single" className=" w-fit rounded-2xl">
          <ToggleGroupItem
            value="off"
            className="py-7 px-11 flex gap-x-2 border rounded-l"
          >
            <img src={wiper} alt="wiper icon" width={50} height={50} />
            <span>off</span>
          </ToggleGroupItem>

          <ToggleGroupItem value="|" className="p-7  border">
            |
          </ToggleGroupItem>

          <ToggleGroupItem value="||" className="py-7 px-6 border">
            ||
          </ToggleGroupItem>
          <ToggleGroupItem value="|||" className="py-7 px-6  border">
            |||
          </ToggleGroupItem>
          <ToggleGroupItem value="||||" className="py-7 px-6  border">
            ||||
          </ToggleGroupItem>
          <ToggleGroupItem
            value="auto"
            className="text-md py-7 px-11 border rounded-r"
          >
            Auto
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* 4 */}

      <div className="flex justify-center items-center mt-4   ">
        <ToggleGroup
          type="single"
          className=" rounded-2xl flex justify-between gap-x-8  min-w-[525px]"
        >
          <ToggleGroupItem
            value="fold mirrors"
            className="py-11 px-[4.4rem] border rounded-l w-[250px] "
          >
            <div className="flex items-center gap-x-4 ">
              <div className="flex items-center ">
                <div className="w-10 h-10 mt-2">
                  <img src={mirror} alt="mirror icon" width={30} height={30} />
                </div>
                <PiArrowsOutSimpleBold className="text-xl font-bold -rotate-45" />
              </div>

              <span className="text-sm ">Mirrors</span>
            </div>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="child lock"
            className="py-11 px-[4.4rem] border rounded-l  w-[250px]"
          >
            <div className="flex items-center gap-x-5 ">
              <PiScreencastLight className="text-3xl" />
              <span className="text-sm ">Recording</span>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex justify-center items-center mt-4   ">
        <ToggleGroup
          type="single"
          className=" rounded-2xl flex justify-between gap-x-8 min-w-[525px]"
        >
          <ToggleGroupItem
            value="fold mirrors"
            className="py-11 px-[4.4rem] border rounded-l w-[250px] "
          >
            <div className="flex items-center gap-x-5 ">
              <div className="flex gap-x-2 items-center">
                <GiSteeringWheel className="text-2xl" />
                <PiArrowsOutSimpleBold className="text-xl font-bold -rotate-45" />
              </div>
              <span className="text-sm ">Steering</span>
            </div>
          </ToggleGroupItem>

          <ToggleGroupItem
            value="child lock"
            className="py-11 px-[4.4rem] border rounded-l  w-[250px]"
          >
            <div className="flex items-center gap-x-5 ">
              <div className="w-4 h-4 ring-2 ring-red-500 border-2 border-gray-100 rounded-full bg-red-500" />
              <span className="text-sm ">Sentry</span>
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* 5 */}
      <div className="w-[525px] flex justify-between gap-x-4  mt-4 ">
        <Slider
          defaultValue={[70]}
          max={100}
          step={10}
          className={cn("w-[80%] border rounded p-4", className)}
          {...props}
        />
        <Toggle
          className={`p-7 bg-blue-500 text-white data-[state=on]:bg-gray-200 data-[state=on]:text-black border rounded`}
        >
          <div className=" ">
            <span className="">Auto</span>
          </div>
        </Toggle>
      </div>
    </Container>
  );
}

export default Controls;
