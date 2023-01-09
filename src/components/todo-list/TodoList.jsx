import React from "react";
import { useLocation } from "react-router-dom";

import TodoItem from "../todo-item/TodoItem";
import Loader from "../loader/Loader";
import { StyledTitle } from "./TodoList.styled";
import Todo from "../../store/Todo";
import { observer } from "mobx-react-lite";

const TodoList = ({ todos }) => {
  const location = useLocation();
  let headingInEmpty;
  switch (location.pathname) {
    case "/archive":
      headingInEmpty = "Archive is empty";
      break;
    case "/trash":
      headingInEmpty = "Trash is empty";
      break;
    default:
      headingInEmpty = "Don't have tasks";
  }

  return Todo.isLoading ? (
    <Loader />
  ) : Object.keys(todos).length ? (
    <ul>
      {todos.map((elem, index) => (
        <TodoItem
          key={elem.id}
          item={elem}
          index={index}
        />
      ))}
    </ul>
  ) : (
    <StyledTitle>{headingInEmpty}</StyledTitle>
  );
};

export default observer(TodoList);
