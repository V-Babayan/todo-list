import React from "react";
import styled from "styled-components";

import ModalForm from "./ModalForm";

const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: #00000066;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  width: 50%;

  background: #ffffff;
`;

const Modal = ({ isModalActive, setModalActive, item, create, change, remove }) => {
  return (
    <>
      {isModalActive && (
        <StyledModal onClick={() => setModalActive(false)}>
          <StyledModalContent onClick={(e) => e.stopPropagation()}>
            <ModalForm item={item} create={create} change={change} remove={remove} />
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
