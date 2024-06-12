import React, { useState } from "react";
import SwitchButton from "@/components/UIComponents/SwitchButton";
import safetyimage from "@/assets/safetyimage.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Buttons, {
  AutoButton,
  LongButtons,
} from "@/components/UIComponents/Buttons";
import CheckBox from "@/components/UIComponents/Checkbox";
import Container from "@/components/UIComponents/Container";

function Safety() {
  const [counter, setCounter] = useState(137);

  return (
    <Container className={" gap-y-5"}>
      <SwitchButton heading={"Allow Mobile Access"} />

      <div className="flex flex-col gap-y-6 w-fit ml-10  ">
        <div className="flex w-full items-center  gap-x-4 text-center">
          <img
            src={safetyimage}
            alt="saftey image"
            width={400}
            height={400}
            className="rounded"
          />
          <span className="text-xl">
            You can also select a gear on the steering column
          </span>
        </div>
        <span className="w-[50%] ml-6 text-xl">
          Foot must be on brake pedal
        </span>
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-4 " />

      <div className="w-full flex justify-start items-center ">
        <button className="px-20 rounded font-medium text-2xl py-2 bg-gray-200">
          Power Off
        </button>
      </div>

      <div className="h-1 bg-gray-200 rounded-full my-4 w-[90%] " />

      <SwitchButton heading={"Speed Limit Mode"} />

      <div className="flex  flex-col  items-center w-[55%] my-5 ">
        <div className="min-w-[350px] p-2 flex   items-center justify-between border bg-gray-200 rounded">
          <FaMinus
            onClick={() => setCounter(counter - 1)}
            className="text-4xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span className="font-medium text-2xl">+{counter} km/h</span>

          <FaPlus
            onClick={() => setCounter(counter + 1)}
            className="text-4xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>

      <div className="flex w-full justify-evenly items-center">
        <div className="w-[50%]">
          <Buttons
            heading={"Sentry Mode"}
            warning={true}
            btn1={"Off"}
            btn2={"On"}
            description={"Sentry Mode will be enabled when you leave the car"}
          />
        </div>
        <div className="w-[50%] flex justify-start gap-y-6 flex-col ml-10">
          <CheckBox labell={"Exclude Home"} />
          <CheckBox labell={"Exclude Work"} />
          <CheckBox labell={"Exclude Favorites"} />
        </div>
      </div>

      <div className="flex w-[87%] justify-center items-center">
        <Buttons
          heading={"Dashcam"}
          warning={true}
          btn1={"Off"}
          btn2={"Manual"}
          btn3={"Auto"}
        />
        <AutoButton btn={"On Honk"} className={"mt-7"} />
      </div>

      <div className="my-5">
        <LongButtons btn1={"Delete Dashcam Clips"} btn2={"Format USB Drive"} />
      </div>

      <div>
        <SwitchButton heading={"Park Assist Chimes"} />
        <SwitchButton heading={"Joe Mode"} warning={true} />
        <SwitchButton heading={"Security Alarm"} />
        <SwitchButton heading={"PIN to Drive"} />
        <SwitchButton heading={"Glovebox PIN"} />
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5  " />

      <div className="mb-28">
        <Buttons
          heading={"Cabin Overheat Protection"}
          warning={true}
          btn1={"Off"}
          btn2={"No A/C"}
          btn3={"On"}
        />
      </div>
    </Container>
  );
}

export default Safety;
