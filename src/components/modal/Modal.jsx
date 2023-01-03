import React, { useRef } from "react";

import { StyledModal, StyledModalContent } from "./Modal.styled";
import { Transition } from "react-transition-group";

const Modal = ({ active, setActive, children }) => {
  const nodeRef = useRef(null);
  const handleClick = (event) => {
    event.stopPropagation();
    setActive(false);
  };

  return (
    <Transition nodeRef={nodeRef} in={active} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <StyledModal ref={nodeRef} active={active} onClick={handleClick} className={`${state}`}>
          <StyledModalContent active={active} onClick={(e) => e.stopPropagation()}>
            {children}
          </StyledModalContent>
        </StyledModal>
      )}
    </Transition>
  );
};

export default Modal;
