import React, { memo } from "react";
import { useLocation } from "react-router-dom";

import { headingInEmpty } from "../../helpers/consts";
import TodoItem from "../todo-item/TodoItem";
import { StyledTitle } from "./TodoList.styled";

const TodoList = ({ todos }) => {
  const location = useLocation();

  return Object.keys(todos).length ? (
    <ul>
      {todos.map((elem) => (
        <TodoItem
          key={elem.id}
          item={elem}
        />
      ))}
    </ul>
  ) : (
    <StyledTitle>{headingInEmpty[location.pathname]}</StyledTitle>
  );
};

export default memo(TodoList);
