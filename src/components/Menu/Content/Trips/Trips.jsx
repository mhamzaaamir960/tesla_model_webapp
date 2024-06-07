import React from "react";
import TripsData from "@/components/UIComponents/TripsData";
import Container from "@/components/UIComponents/Container";

function Trips() {
  return (
    <Container className={"mt-5 ml-5 gap-y-10"}>
      <TripsData
        TripTitle={"Current Trip"}
        distance={"8"}
        duration={"17"}
        avgEnergy={"179"}
      />
      <TripsData
        TripTitle={"Since Last Charge"}
        distance={"17"}
        duration={"3"}
        avgEnergy={"174"}
      />
      <TripsData
        TripTitle={"Trip A"}
        distance={"6,863"}
        duration={"1,200"}
        avgEnergy={"175"}
        className={"text-purple-600"}
      />
      <TripsData
        TripTitle={"Trip B"}
        distance={"6,863"}
        duration={"1,200"}
        avgEnergy={"175"}
        className={"text-purple-600"}
      />

      <div className="w-full flex flex-col items-start justify-center gap-y-6 mb-10">
        <div className="font-medium flex gap-x-24">
          <span>Odometer</span>
          <span>6,863 km</span>
        </div>
        <div className="w-[80%] flex justify-start gap-x-6">
          <button className="text-sm font-medium  rounded w-[130px] border bg-gray-200 px-5 py-1">
            Reset Current Trip
          </button>
          <button className="text-sm font-medium  rounded w-[130px] border bg-gray-200 px-10 py-1">
            Reset Trip A
          </button>
          <button className="text-sm font-medium  rounded w-[130px] border bg-gray-200 px-10 py-1">
            Reset Trip B
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Trips;
