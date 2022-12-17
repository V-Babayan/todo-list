import styled from "styled-components";

export const StyledTodoItem = styled.li`
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 20px;

  &:before {
    content: "";
    display: block;
    align-self: stretch;
    flex: 0 0 30px;

    border-radius: 13px 0 0 13px;
    background: ${({ priority, theme }) => theme.priorityColors[priority] || theme.primary.violet};
  }
`;
