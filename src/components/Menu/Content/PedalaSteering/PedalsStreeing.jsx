import React from "react";
import Container from "@/components/UIComponents/Container";
import Buttons from "@/components/UIComponents/Buttons";
import SwitchButton from "@/components/UIComponents/SwitchButton";

function PedalsStreeing() {
  return (
    <Container className={" mt-5"}>
      {/* 1 */}
      <Buttons heading={"Acceleration"} btn1={"Chill"} btn2={"Standard"} />

      {/* 2  */}
      <Buttons
        heading={"Steering Mode"}
        btn1={"Comfort"}
        btn2={"Standard"}
        btn3={"Sport"}
      />

      {/* 3  */}
      <Buttons
        heading={"Stopping Mode"}
        btn1={"Creep"}
        btn2={"Roll"}
        btn3={"Hold"}
        description={
          "Maximizes range by extending regenerative braking to lower speeds and automatically blends in brakes to hold the vehicle at a stop"
        }
      />
      <div className="h-1 bg-gray-200 rounded-full w-[90%]  my-2 " />

      <SwitchButton heading={"Off-Road Assist"} warning={true} />
      <SwitchButton
        heading={"Slip Start"}
        description={"Use to help free vehicle stuck in snow, sand, or mud."}
        className={'my-2'}
      />
      <SwitchButton heading={"Traller Mode"} warning={true} />
    </Container>
  );
}

export default PedalsStreeing;
