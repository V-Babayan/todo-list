import React from "react";
import { StyledButtonsContainer } from "../modal-form/ModalForm.styled";
import Button from "../core-ui/button/Button";
import { StyledTitle } from "./DeleteModal.styled";

import Todo from "../../store/Todo";
import { useModal } from "../Context";

const DeleteModal = () => {
  const { toggleModal } = useModal();

  const deleteHandle = () => {
    Todo.delete();
    toggleModal();
  };
  return (
    <>
      <StyledTitle>Are you sure you want to delete?</StyledTitle>
      <StyledButtonsContainer>
        <Button onClick={deleteHandle}>Yes</Button>
        <Button onClick={() => toggleModal()}>No</Button>
      </StyledButtonsContainer>
    </>
  );
};

export default DeleteModal;
