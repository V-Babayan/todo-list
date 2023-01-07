import React from "react";

import TodoItem from "../todo-item/TodoItem";
import Loader from "../loader/Loader";

const TodoList = ({ todos, changeCompleted, isLoading, changingModal }) => {
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
          changingModal={changingModal}
        />
      ))}
    </ul>
  );
};

export default TodoList;
