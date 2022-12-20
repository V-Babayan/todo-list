import React from "react";

import { StyledModal, StyledModalContent } from "./Modal.styled";

const Modal = ({ active, setActive, children }) => {
  return (
    <StyledModal active={active} onClick={() => setActive(false)}>
      <StyledModalContent active={active} onClick={(e) => e.stopPropagation()}>
        {/* This is temporary decision */}
        {active && children}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
