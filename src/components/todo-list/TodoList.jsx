import React from "react";

import { StyledTitle } from "./TodoList.styled";
import TodoItem from "../todo-item/TodoItem";

const TodoList = ({ todos, changeIsActive, change }) => {
  if (!todos.length) {
    return <StyledTitle>Don't have todos!</StyledTitle>;
  }

  return (
    <ul>
      {todos.map((elem, index) => (
        <TodoItem
          key={elem.id}
          changeIsActive={changeIsActive}
          item={elem}
          index={index}
          change={change}
        />
      ))}
    </ul>
  );
};

export default TodoList;
