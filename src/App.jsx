import React, { useState } from "react";
import MenuNav from "./components/Menu/Menu";
import TeslaCar from "./components/CarSection/TeslaCar";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import context from "./context/Context";
import Footer from "./components/Footer/Footer";

function App() {
  const storedData = localStorage.getItem("data");
  const initialData = storedData
    ? JSON.parse(storedData)
    : { name: "Sotiris", batteryStatus: "30", temperature: "16" };

  const $wifi = localStorage.getItem("wifi");
  const wifiData = $wifi ? JSON.parse($wifi) : false;

  const [isLockOpen, setIsLockOpen] = useState(false);
  const [onWifi, setOnWifi] = useState(wifiData);
  const [isChargingRouteOpen, setIsChargingRouteOpen] = useState(false);
  const [data, setData] = useState(initialData);

  return (
    <context.Provider
      value={{
        isLockOpen,
        setIsLockOpen,
        onWifi,
        setOnWifi,
        isChargingRouteOpen,
        setIsChargingRouteOpen,
        data,
        setData,
      }}
    >
      <main className="flex min-w-[1920px] max-w-[1920px] max-h-[1200px] min-h-[1200px]">
        <Navbar />
        <TeslaCar />
        <Map />
        <MenuNav />
        <Footer />
      </main>
    </context.Provider>
  );
}

export default App;
