import React, { useRef, memo } from "react";

import { StyledModal, StyledModalContent } from "./Modal.styled";
import { Transition } from "react-transition-group";

import Todo from "../../store/Todo";
import { useModal } from "../../hooks/useModal";

const Modal = ({ children }) => {
  const nodeRef = useRef(null);
  const { modal, toggleModal } = useModal();

  const handleClick = (e) => {
    e.stopPropagation();

    toggleModal();
    Todo.setCurrentTodo({});
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={modal}
      timeout={500}
      mountOnEnter
      unmountOnExit>
      {(state) => (
        <StyledModal
          ref={nodeRef}
          onClick={handleClick}
          className={`${state}`}>
          <StyledModalContent onClick={(e) => e.stopPropagation()}>{children}</StyledModalContent>
        </StyledModal>
      )}
    </Transition>
  );
};

export default memo(Modal);
