import styled from "styled-components";

const StyledRadio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  border: 1px solid ${({ id, theme }) => theme.priorityColors[id] || theme.primary.violet};

  &:checked {
    background: ${({ id, theme }) => theme.priorityColors[id] || theme.primary.violet};
    background-clip: content-box;
  }

  transition: background 0.3s linear;
`;

export default StyledRadio;
