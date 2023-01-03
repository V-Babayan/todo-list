import React from "react";

import TodoItem from "../todo-item/TodoItem";
import Loader from "../loader/Loader";

const TodoList = ({ todos, changeCompleted, modalOpenAndClose, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <ul>
      {todos.map((elem, index) => (
        <TodoItem
          key={elem.id}
          changeCompleted={changeCompleted}
          item={elem}
          index={index}
          modalOpenAndClose={modalOpenAndClose}
        />
      ))}
    </ul>
  );
};

export default TodoList;
