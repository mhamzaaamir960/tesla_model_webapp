import React from "react";
import tesla from "@/assets/tesla.png";
import Buttons from "@/components/UIComponents/Buttons";
import Container from "@/components/UIComponents/Container";

function Software() {
  return (
    <Container className={'p-0'}>
      <div className="w-full flex justify-center items-start ">
        <img src={tesla} alt="tesla image" width={800} />
      </div>

      <div className="w-full flex flex-col justify-start ">
        <div className="flex flex-col ">
          <span className="text-5xl font-normal ">MODEL Y</span>
          <span className="text-2xl font-normal ">STANDARD PLUS</span>
          <span className="font-medium my-8 text-2xl">6,863 km</span>
          <span className="font-medium mb-3 text-2xl">VIN 5YJ3E1EA7MF084928</span>
          <p className="font-medium text-2xl mb-1">
            Autopilot Computer:Full self-driving computer
          </p>
          <p className="font-medium text-2xl text-blue-500">
            Additional vehicle information
          </p>
        </div>

        <Buttons
          heading={"Autopilot"}
          warning={true}
          description={"Included pakage"}
          className={"mt-10 gap-y-0 "}
        />
        <Buttons
          heading={"Standard Connectivity"}
          warning={true}
          description={"Included pakage"}
          className={"mt-0 "}
        />

        <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

        <div className="flex  flex-col justify-center w-full">
          <div className="flex justify-between items-center w-[90%]">
            <span className="font-medium text-2xl">Software</span>
            <span className="font-medium text-blue-500 text-xl">Release Notes</span>
          </div>
          <span className="font-medium mt-2 text-2xl">
            v11.0(2022.4.5.17 31c9063b01aa)
          </span>
          <span className="mt-5 mb-2 font-medium  text-2xl">Navigation Data</span>
          <span className=" mb-3 text-2xl">NA-2021.44-13555</span>
          <p className="text-2xl">Your car software is up to date as of 5 Apr 3:32 pm</p>
        </div>

        <Buttons
          heading={"Software Update Preference"}
          warning={true}
          btn1={"Standard"}
          btn2={"Advanced"}
        />

        <button className="px-20 font-medium mt-5 py-3 rounded bg-gray-200 w-fit">
          Data Sharing
        </button>
      </div>
    </Container>
  );
}

export default Software;
