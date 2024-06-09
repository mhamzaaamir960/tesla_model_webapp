import React, { useState } from "react";
import MenuNav from "./components/Menu/Menu";
import TeslaCar from "./components/CarSection/TeslaCar";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import context from "./context/Context";

function App() {
  const [isLockOpen, setIsLockOpen] = useState(false);
  const [isChargingRouteOpen, setIsChargingRouteOpen] = useState(false);
  const [batteryStatus, setBateryStatus] = useState("30");
  const [temp, setTemp] = useState("16");
  const [name, setName] = useState("Matteo");
  return (
    <context.Provider
      value={{
        isLockOpen,
        setIsLockOpen,
        isChargingRouteOpen,
        setIsChargingRouteOpen,
        batteryStatus,
        setBateryStatus,
        temp,
        setTemp,
        name,
        setName,
      }}
    >
      <main className="flex min-w-full  max-w-[1920px] max-h-[1200px] min-h-full ">
        <Navbar />
        <TeslaCar />
        <Map />
        <MenuNav />
      </main>
    </context.Provider>
  );
}

export default App;
