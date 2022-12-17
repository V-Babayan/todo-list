import React from "react";
import styled from "styled-components";

import TodoInfo from "./todo-info/TodoInfo";
import MyChackbox from "./core-ui/checkbox/Checkbox";
import MyButton from "./core-ui/button/Button";

const StyledTodoItem = styled.li`
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

const TodoItem = ({ item, index, changeIsActive, change }) => {
  return (
    <StyledTodoItem priority={item.priority}>
      <MyChackbox
        onClick={() => changeIsActive(item.id, !item.isActive)}
        isActive={item.isActive}
      />
      <TodoInfo index={index} item={item} />
      <MyButton onClick={() => change(item)}>Change</MyButton>
    </StyledTodoItem>
  );
};

export default TodoItem;
