import React, { useRef } from "react";

import { StyledModal, StyledModalContent } from "./Modal.styled";
import { Transition } from "react-transition-group";

import ModalStore from "../../store/ModalStore";
import Todo from "../../store/Todo";
import { observer } from "mobx-react-lite";

const Modal = observer(({ children }) => {
  const nodeRef = useRef(null);
  const handleClick = (event) => {
    event.stopPropagation();
    ModalStore.toggleModal();
    Todo.setCurrentTodo({});
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={ModalStore.active}
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
});

export default Modal;
