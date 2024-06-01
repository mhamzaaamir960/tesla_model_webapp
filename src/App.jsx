import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <h3 className="text-white bg-black px-4 py-2 rounded text-4xl font-bold">Hello World!</h3>
    </div>
  );
}

export default App;
