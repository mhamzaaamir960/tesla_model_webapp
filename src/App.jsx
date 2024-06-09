import React, { useState } from "react";
import MenuNav from "./components/Menu/Menu";
import TeslaCar from "./components/CarSection/TeslaCar";
// import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import context from "./context/Context";

function App() {
  const [isLockOpen, setIsLockOpen] = useState(false);
  return (
    <context.Provider value={{ isLockOpen, setIsLockOpen }}>
      <main className="flex min-w-full max-w-[1920px] max-h-[1200px] min-h-full ">
        <Navbar />
        <TeslaCar />
        {/* <Map /> */}
        <MenuNav />
      </main>
    </context.Provider>
  );
}

export default App;
