import React from "react";

function TripsData({ TripTitle, className, distance, duration, avgEnergy }) {
  return (
    <div className="w-[80%]  flex flex-col gap-y-2 items-start">
      {TripTitle && (
        <span className={`font-medium ${className}`}>{TripTitle}</span>
      )}
      <div className="w-full flex justify-between">
        <span className="text-gray-500">Distance</span>
        <span className="text-gray-500">Duration</span>
        <span className="text-gray-500">Avg. Energy</span>
      </div>

      <div className="w-full flex justify-between">
        {distance && <span className="font-medium">{distance} km</span>}
        {duration && <span className="font-medium">{duration} Wh/km</span>}
        {avgEnergy && <span className="font-medium">{avgEnergy} km</span>}
      </div>
      
    </div>
  );
}

export default TripsData;
