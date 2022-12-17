import React from "react";

import { StyledTodoItem } from "./TodoItem.styled";

import TodoInfo from "../todo-info/TodoInfo";
import Checkbox from "../core-ui/checkbox/Checkbox";
import Button from "../core-ui/button/Button";

const TodoItem = ({ item, index, changeIsActive, change }) => {
  return (
    <StyledTodoItem priority={item.priority}>
      <Checkbox onClick={() => changeIsActive(item.id, !item.isActive)} isActive={item.isActive} />
      <TodoInfo index={index} item={item} />
      <Button onClick={() => change(item)}>Change</Button>
    </StyledTodoItem>
  );
};

export default TodoItem;
