import React from "react";

import { StyledModal, StyledModalContent } from "./Modal.styled";

const Modal = ({ active, setActive, children }) => {
  return (
    active && (
      <StyledModal active={active} onClick={() => setActive(false)}>
        <StyledModalContent active={active} onClick={(e) => e.stopPropagation()}>
          {children}
        </StyledModalContent>
      </StyledModal>
    )
  );
};

export default Modal;
