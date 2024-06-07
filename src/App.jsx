import React from "react";
import MenuNav from "./components/Menu/Menu";
import TeslaCar from "./components/CarSection/TeslaCar";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="flex min-w-full max-w-[2000px] ">
      <Navbar/>
      <TeslaCar />
      <Map />
      <MenuNav />
    </main>
  );
}

export default App;
