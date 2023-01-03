import React from "react";

import { StyledModal, StyledModalContent } from "./Modal.styled";

const Modal = ({ active, setActive, children }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    setActive(false);
  };

  return (
    active && (
      <StyledModal active={active} onClick={handleClick}>
        <StyledModalContent active={active} onClick={(e) => e.stopPropagation()}>
          {children}
        </StyledModalContent>
      </StyledModal>
    )
  );
};

export default Modal;
