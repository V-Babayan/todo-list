import styled from "styled-components";

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

  pointer-events: ${({ active }) => (active ? "auto" : "none")};

  transition: opacity 0.5s linear;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const StyledModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  width: 50vw;
  opacity: 1;
  transition: transform 0.5s linear;
  transform: scale(${({ active }) => (active ? 1 : 0)});

  background: #ffffff;
`;
