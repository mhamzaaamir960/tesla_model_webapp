import { createContext, useContext } from "react";

const context = createContext({
  isLockOpen: false,
  setIsLockOpen: () => {},
  onWifi: false,
  setOnWifi: () => {},
  isChargingRouteOpen: false,
  setIsChargingRouteOpen: () => {},
  batteryStatus: "30",
  setBateryStatus: () => {},
  temp: "16",
  setTemp: () => {},
  name: "Matteo",
  setName: () => {},
});

export default context;

export function useContextProvider() {
  return useContext(context);
}
