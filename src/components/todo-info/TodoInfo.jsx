import React from "react";

import {
  StyledTodoInfo,
  StyledTodoTitle,
  StyledTodoSubtitle,
  StyledDateContainer,
  StyledDate,
} from "./TodoInfo.styled";

const TodoInfo = ({ item, index }) => {
  return (
    <StyledTodoInfo>
      <div>
        <StyledTodoTitle isActive={item.isActive}>{index + 1 + "." + item.title}</StyledTodoTitle>
        <StyledTodoSubtitle isActive={item.isActive}>{item.description}</StyledTodoSubtitle>
      </div>
      <StyledDateContainer>
        {item.created && (
          <StyledDate content={"Created by: "}>{item.created.toLocaleDateString()}</StyledDate>
        )}
        {item.expected && (
          <StyledDate content={"Expected by: "}>{item.expected.toLocaleDateString()}</StyledDate>
        )}
      </StyledDateContainer>
    </StyledTodoInfo>
  );
};

export default TodoInfo;
