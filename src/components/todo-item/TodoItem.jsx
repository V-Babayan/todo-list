import React from "react";

import { StyledTodoItem } from "./TodoItem.styled";

import TodoInfo from "../todo-info/TodoInfo";
import MyChackbox from "../core-ui/checkbox/Checkbox";
import MyButton from "../core-ui/button/Button";

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
