import { createContext, useContext } from "react";

export const modalContext = createContext();

export const useModal = () => {
  return useContext(modalContext);
};
