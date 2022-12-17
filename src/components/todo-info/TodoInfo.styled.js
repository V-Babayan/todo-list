import styled from "styled-components";

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
  justify-content: space-evenly;

  flex: 0 0 auto;
  align-items: flex-end;
`;

export const StyledDate = styled.p`
  color: #de1f85;

  &:before {
    content: "${({ content }) => content || ""}";
    color: #2e2e2e;
  }
`;
