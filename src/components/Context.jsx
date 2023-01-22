import React, { createContext, useContext, useState } from "react";

const modalContext = createContext();
export const useModal = () => {
  return useContext(modalContext);
};

const Context = ({ children }) => {
  const [modal, setModal] = useState();

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return <modalContext.Provider value={{ modal, toggleModal }}>{children}</modalContext.Provider>;
};

export default Context;
