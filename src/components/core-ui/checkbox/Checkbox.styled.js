import styled from "styled-components";

const StyledCheckbox = styled.div`
  position: relative;
  height: 20px;
  flex: 0 0 20px;

  border: 2px solid #000000;
  border-radius: 5px;

  cursor: pointer;
  transition: background 0.2s linear;

  & > svg {
    position: absolute;
    bottom: 3px;
    left: 2px;
  }

  &:hover {
    background: #c4c4c4;
  }
`;

export { StyledCheckbox };
