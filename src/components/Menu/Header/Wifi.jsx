import React, { useEffect } from "react";
import { PiCellSignalFull } from "react-icons/pi";
import { IoWifiOutline } from "react-icons/io5";

import { useContextProvider } from "@/context/Context";

function Wifi() {
  const { onWifi, setOnWifi } = useContextProvider();

  const handleWifi = () => {
    localStorage.setItem("wifi", !onWifi);
    setOnWifi(!onWifi);
  };
  return (
    <div className=" h-full mt-12">
      <button onClick={handleWifi} className={`  `}>
        {onWifi ? (
          <IoWifiOutline className="text-4xl text-gray-500 cursor-pointer" />
        ) : (
          <PiCellSignalFull className="text-4xl text-gray-500 cursor-pointer" />
        )}
      </button>
    </div>
  );
}

export default Wifi;
