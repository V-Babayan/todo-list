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

const StyledPriorityRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const StyledLabel = styled.label`
  text-transform: capitalize;
  color: ${({ htmlFor, theme }) => theme.priorityColors[htmlFor] || theme.primary.violet};
`;

export { StyledRadio, StyledPriorityRadio, StyledLabel };
