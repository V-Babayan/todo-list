import styled, { keyframes } from "styled-components";
const openModal = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const openModalContent = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;

export const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: #00000088;
  display: flex;
  align-items: center;
  justify-content: center;

  &.entering {
    animation: ${openModal} 0.5s linear;
  }

  &.entering > div {
    animation: ${openModalContent} 0.5s linear;
  }
  &.exiting {
    animation: ${openModal} 0.5s linear reverse;
  }
  &.exiting > div {
    animation: ${openModalContent} 0.5s linear reverse;
  }
`;

export const StyledModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  width: 50vw;
  opacity: 1;

  background: #ffffff;
`;
