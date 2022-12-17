import React from "react";
import styled from "styled-components";

const StyledTodoInfo = styled.div`
  display: flex;
  gap: 10px;
  flex: 1 1 auto;
  justify-content: space-between;
`;

const StyledTodoTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  color: #000000;
  ${({ isActive }) => (isActive ? "" : "text-decoration: line-through;")}

  margin-bottom: 5px;
`;

const StyledTodoSubtitle = styled.p`
  color: #2e2e2e;
  ${({ isActive }) => (isActive ? "" : "text-decoration: line-through;")}
`;

const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  flex: 0 0 auto;
  align-items: flex-end;
`;

const StyledDate = styled.p`
  color: #de1f85;

  &:before {
    content: "${({ content }) => content || ""}";
    color: #2e2e2e;
  }
`;

const TodoInfo = ({ item, index }) => {
  return (
    <StyledTodoInfo>
      <div>
        <StyledTodoTitle isActive={item.isActive}>{index + 1 + "." + item.title}</StyledTodoTitle>
        <StyledTodoSubtitle isActive={item.isActive}>{item.description}</StyledTodoSubtitle>
      </div>
      <StyledDateContainer>
        {item.created && <StyledDate content={"Created by: "}>{item.created}</StyledDate>}
        {item.expected && <StyledDate content={"Expected by: "}>{item.expected}</StyledDate>}
      </StyledDateContainer>
    </StyledTodoInfo>
  );
};

export default TodoInfo;
