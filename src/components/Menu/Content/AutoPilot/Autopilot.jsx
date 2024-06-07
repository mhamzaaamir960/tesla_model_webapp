import React, { useState } from "react";
import Container from "@/components/UIComponents/Container";
import { FaMinus, FaPlus } from "react-icons/fa6";
import SwitchButton from "@/components/UIComponents/SwitchButton";
import Buttons from "@/components/UIComponents/Buttons";

function Autopilot() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <Container className={'mt-5 ml-5'}>
      <SwitchButton heading={"Autosteer (Beta)"} />
      <SwitchButton heading={"AFull Self-Driving Visualization Preview"} />

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <Buttons
        heading={"Set Speed"}
        warning={true}
        btn1={"Speed Limit"}
        btn2={"Current Speed"}
        className={"gap-y-2"}
      />

      <Buttons
        heading={"Offset"}
        warning={true}
        btn1={"Fixed"}
        btn2={"Percentage"}
        className={"gap-y-2"}
      />

      <div className="flex w-[65%]  mt-4 ">
        <div className="min-w-[300px]  self-start p-2 flex items-center justify-between border bg-gray-200 rounded">
          <FaMinus
            onClick={() => setCounter(counter - 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span className="font-medium">+{counter} km/h</span>

          <FaPlus
            onClick={() => setCounter(counter + 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <SwitchButton
        heading={"Automatic Blind Spot Camera"}
        description={"Show side repeater camera when turn signal is engaged"}
      />

      <SwitchButton
        heading={" Blind Spot Collision Warining Chime"}
        warning={true}
      />

      <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

      <Buttons
        heading={"Speed Limit Warning"}
        btn1={"Off"}
        btn2={"Display"}
        btn3={"Chime"}
      />

      <Buttons heading={"Speed Limit"} btn1={"Relative"} btn2={"Absolute"} />

      <div className="flex  flex-col gap-y-2 w-[65%]  mt-4  mb-10">
        <span className="font-medium ">Offset</span>
        <div className="min-w-[250px]  self-start p-2 flex items-center justify-between border bg-gray-200 rounded">
          <FaMinus
            onClick={() => setCounter2(counter2 - 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
          />
          <span className="font-medium">+{counter2} km/h</span>

          <FaPlus
            onClick={() => setCounter2(counter2 + 1)}
            className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer  "
          />
        </div>
      </div>

      <Buttons
        heading={"Forward Collection Warning"}
        btn1={"Off"}
        btn2={"Late"}
        btn3={"Medium"}
        btn4={"Early"}
      />

      <Buttons
        heading={"Lane Departure Avoidance"}
        warning={true}
        btn1={"Off"}
        btn2={"Warning"}
        btn3={"Assist"}
      />

      <SwitchButton heading={"Emergency Lane Departure Avoidance"} />
      <SwitchButton heading={"Automatic Emergency Braking"} />
      <SwitchButton heading={" Obstacle-Aware Acceleration"} warning={true} />
      <SwitchButton heading={"Traffic-Aware Cruise Control Chime"} />
    </Container>
  );
}

export default Autopilot;
