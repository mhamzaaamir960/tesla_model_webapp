import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Autopilot,
  Charging,
  Controls,
  Display,
  Lights,
  Locks,
  Navigation,
  PedalsStreeing,
  Safety,
  Service,
  Software,
  Trips,
} from "./components/Menu/Content/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Controls />,
      },
      {
        path: "dynamics",
        element: <PedalsStreeing />,
      },
      {
        path: "charging",
        element: <Charging />,
      },
      {
        path: "autopilot",
        element: <Autopilot />,
      },
      {
        path: "locks",
        element: <Locks />,
      },
      {
        path: "lights",
        element: <Lights />,
      },
      {
        path: "display",
        element: <Display />,
      },
      {
        path: "trips",
        element: <Trips />,
      },

      {
        path: "navigation",
        element: <Navigation />,
      },
      {
        path: "safety",
        element: <Safety />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "software",
        element: <Software />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
