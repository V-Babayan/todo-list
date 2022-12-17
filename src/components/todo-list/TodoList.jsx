import React, { memo } from 'react';

import TodoItem from '../TodoItem';
import { StyledTitle } from './TodoList.styled';

const TodoList = ({ todos, changeIsActive, change }) => {
  if (!todos.length) {
    return <StyledTitle>Don't have todos!</StyledTitle>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          changeIsActive={changeIsActive}
          item={todo}
          index={index}
          change={change}
        />
      ))}
    </ul>
  );
};

export default memo(TodoList);
