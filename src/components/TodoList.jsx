import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item/TodoItem";

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 700;
`;

const TodoList = ({ todos, changeIsActive, change }) => {
  if (!todos.length) {
    return <StyledTitle>Don't have todos!</StyledTitle>;
  }

  return (
    <ul>
      {todos.map((elem, index) => (
        <TodoItem
          changeIsActive={changeIsActive}
          item={elem}
          key={elem.id}
          index={index}
          change={change}
        />
      ))}
    </ul>
  );
};

export default TodoList;
