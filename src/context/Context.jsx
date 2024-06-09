import { createContext, useContext } from "react";

 const context = createContext({
  isLockOpen: false,
  setIsLockOpen: () => {},
});

export default context

export function useContextProvider() {
  return useContext(context);
}
