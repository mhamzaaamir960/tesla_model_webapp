import React from "react";
import Container from "@/components/UIComponents/Container";
import teslaroof from "@/assets/teslaroof.png";
import { LongButtons } from "@/components/UIComponents/Buttons";

function Service() {
  return (
    <Container className={" gap-y-5 items-center"}>
      <div className="flex w-full justify-center items-center relative top-0 mb-16">
        <img
          src={teslaroof}
          alt="tesla roof"
          width={500}
          className="object-cover rotate-3"
        />
        <div className="">
          <span className="absolute top-14 right-36 text-2xl font-medium">
            --psi
          </span>
          <span className="absolute bottom-14 right-36 text-2xl font-medium">
            --psi
          </span>
          <span className="absolute top-14 left-32 text-2xl font-medium">
            --psi
          </span>
          <span className="absolute bottom-14 left-32 text-2xl font-medium">
            --psi
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mb-28">
        <LongButtons btn1={"Owner's Manual"} btn2={"Car Wash Mode"} />
        <LongButtons
          className={"my-8"}
          btn1={"Adjust Headlights"}
          btn2={"Towing"}
        />
        <LongButtons btn1={"Wheel Configuration"} btn2={"Notifications"} />
        <LongButtons
          className={"my-8"}
          btn1={"Camera Calibration"}
          btn2={"Seat & Steering Calibration"}
        />
        <LongButtons className={'mb-3'} btn1={"Factory Reset"} btn2={"Wiper Service Mode"} />
        <p className="ml-3 text-xl">
          Need Tesla Roadside Assistance?{" "}
          <span className="text-blue-500 font-medium">Call 1-877-79TESLA</span>
        </p>
      </div>
    </Container>
  );
}

export default Service;
