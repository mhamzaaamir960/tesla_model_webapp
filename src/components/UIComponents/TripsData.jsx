import React from "react";

function TripsData({ TripTitle, className, distance, duration, avgEnergy }) {
  return (
    <div className="w-[80%]  flex flex-col gap-y-6 items-start">
      {TripTitle && (
        <span className={`font-medium text-3xl ${className}`}>{TripTitle}</span>
      )}
      <div className="w-full flex justify-between">
        <span className="text-gray-500 text-2xl">Distance</span>
        <span className="text-gray-500 text-2xl">Duration</span>
        <span className="text-gray-500 text-2xl">Avg. Energy</span>
      </div>

      <div className="w-full flex justify-between">
        {distance && <span className="font-medium text-2xl">{distance} km</span>}
        {duration && (
          <span className="font-medium text-2xl">{duration} Wh/km</span>
        )}
        {avgEnergy && (
          <span className="font-medium text-2xl">{avgEnergy} km</span>
        )}
      </div>
    </div>
  );
}

export default TripsData;
