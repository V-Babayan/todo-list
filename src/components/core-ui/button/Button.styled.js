import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 10px;

  border: 4px solid ${({ theme }) => theme.primary.green};
  border-radius: 5px;

  cursor: pointer;
  transition: background 0.2s linear;

  &:hover {
    background: #c4c4c4;
  }
`;

export default StyledButton;
