import React from "react";
import MenuNav from "./components/Menu/Menu";
import TeslaCar from "./components/CarSection/TeslaCar";
import Map from "./components/Map/Map";

function App() {
  return (
    <main className="flex min-w-full max-w-[200px]">
      <TeslaCar />
      <Map />
      <MenuNav />
    </main>
  );
}

export default App;
