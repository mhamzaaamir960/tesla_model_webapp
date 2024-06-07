import React from "react";
import tesla from "@/assets/tesla.png";
import Buttons from "@/components/UIComponents/Buttons";

function Software() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-center items-start ">
        <img src={tesla} alt="tesla image" width={400} />
      </div>

      <div className="w-full flex flex-col justify-start ml-5 mb-6">
        <div className="flex flex-col ">
          <span className="text-3xl font-normal ">MODEL 3</span>
          <span className="text-xl font-normal ">STANDARD PLUS</span>
          <span className="font-medium my-3">6,863 km</span>
          <span className="font-medium mb-3">VIN 5YJ3E1EA7MF084928</span>
          <p className="font-medium">
            Autopilot Computer:Full self-driving computer
          </p>
          <p className="font-medium text-blue-500">
            Additional vehicle information
          </p>
        </div>
        <Buttons
          heading={"Autopilot"}
          warning={true}
          description={"Included pakage"}
          className={"mt-10 gap-y-0"}
        />
        <Buttons
          heading={"Standard Connectivity"}
          warning={true}
          description={"Included pakage"}
          className={"mt-0 gap-y-0"}
        />

        <div className="h-1 bg-gray-200 rounded-full w-[90%] my-5" />

        <div className="flex  flex-col justify-center w-full">
          <div className="flex justify-between items-center w-[90%]">
            <span className="font-medium text-base">Software</span>
            <span className="font-medium text-blue-500">Release Notes</span>
          </div>
          <span className="font-medium mt-2">
            v11.0(2022.4.5.17 31c9063b01aa)
          </span>
          <span className="mt-5 mb-2 font-medium">Navigation Data</span>
          <span className="font-medium mb-3">NA-2021.44-13555</span>
          <p>Your car software is up to date as of 5 Apr 3:32 pm</p>
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
    </div>
  );
}

export default Software;
