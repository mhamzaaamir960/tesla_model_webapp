import React, { useState } from "react";
import MenuNav from "./components/Menu/Menu";
import TeslaCar from "./components/CarSection/TeslaCar";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import context from "./context/Context";

function App() {
  const storedData = localStorage.getItem("data");
  const initialData = storedData
    ? JSON.parse(storedData)
    : { name: "Sotiris", batteryStatus: "30", temperature: "16" };

  const [isLockOpen, setIsLockOpen] = useState(false);
  const [isChargingRouteOpen, setIsChargingRouteOpen] = useState(false);
  const [data, setData] = useState(initialData);

  return (
    <context.Provider
      value={{
        isLockOpen,
        setIsLockOpen,
        isChargingRouteOpen,
        setIsChargingRouteOpen,
        data,
        setData,
      }}
    >
      <main className="flex min-w-full max-w-[1920px] max-h-[1200px] min-h-full">
        <Navbar />
        <TeslaCar />
        <Map />
        <MenuNav />
      </main>
    </context.Provider>
  );
}

export default App;
