import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";

import Todo from "../store/Todo";
import TodoList from "../components/todo-list/TodoList";

const Trash = () => {
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const sortedAndSearchedTodos = useTodos(filter, Todo.trash);

  return (
    <div>
      <FilterForm
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList todos={sortedAndSearchedTodos} />
    </div>
  );
};

export default Trash;
