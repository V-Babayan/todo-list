import React, { useState } from "react";
import { modalContext } from "../hooks/useModal";

const Context = ({ children }) => {
  const [modal, setModal] = useState();

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return <modalContext.Provider value={{ modal, toggleModal }}>{children}</modalContext.Provider>;
};

export default Context;
