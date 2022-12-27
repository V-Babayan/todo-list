import styled from "styled-components";

export const StyledPriorityRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const StyledLabel = styled.label`
  text-transform: capitalize;
  color: ${({ htmlFor, theme }) => theme.priorityColors[htmlFor] || theme.primary.violet};
`;
