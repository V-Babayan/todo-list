import React from "react";
import { StyledButtonsContainer } from "../modal-form/ModalForm.styled";
import Button from "../core-ui/button/Button";
import { StyledTitle } from "./DeleteModal.styled";

import ModalStore from "../../store/ModalStore";
import Todo from "../../store/Todo";

const DeleteModal = () => {
  const deleteHandle = () => {
    Todo.delete();
    ModalStore.toggleModal();
  };
  return (
    <>
      <StyledTitle>Are you sure you want to delete?</StyledTitle>
      <StyledButtonsContainer>
        <Button onClick={deleteHandle}>Yes</Button>
        <Button onClick={() => ModalStore.toggleModal()}>No</Button>
      </StyledButtonsContainer>
    </>
  );
};

export default DeleteModal;
