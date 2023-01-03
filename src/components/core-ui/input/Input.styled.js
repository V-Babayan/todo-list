import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;

  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  padding: 8px 0.8em;

  font-size: 13px;
  line-height: 1.15385;
  color: #39739d;

  transition: all 0.2s linear;

  background-color: #e1ecf4;

  &:hover,
  &:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;

export default StyledInput;
