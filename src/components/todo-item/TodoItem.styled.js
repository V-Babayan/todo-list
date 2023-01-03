import styled from "styled-components";

export const StyledTodoItem = styled.li`
  padding: 10px;
  padding-left: 30px;

  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  background: #fff;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 20px;
    border-radius: 8px 0 0 8px;

    background: ${({ priority, theme }) => theme.priorityColors[priority] || theme.primary.violet};
  }
`;

export const StyledTodoInfo = styled.div`
  display: flex;
  gap: 10px;
  flex: 1 1 auto;
  justify-content: space-between;
`;

export const StyledTodoTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  color: #000000;
  ${({ isActive }) => (isActive ? "" : "text-decoration: line-through;")}

  margin-bottom: 5px;
`;

export const StyledTodoSubtitle = styled.p`
  color: #2e2e2e;
  ${({ isActive }) => (isActive ? "" : "text-decoration: line-through;")}
`;

export const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 0 0 auto;
  gap: 10px;
  align-items: flex-end;
`;

export const StyledDate = styled.p`
  color: #de1f85;

  &:before {
    content: "${({ content }) => content || ""}";
    color: #2e2e2e;
  }
`;
