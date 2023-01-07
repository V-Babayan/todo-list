import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Todo from "../store/Todo";

import Modal from "../components/modal/Modal";
import TodoList from "../components/todo-list/TodoList";
import ModalForm from "../components/modal-form/ModalForm";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";

const Todos = () => {
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedAndSearchedTodos = useTodos(filter, Todo.todos);

  return (
    <div>
      <FilterForm
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList todos={sortedAndSearchedTodos} />
      <Modal>
        <ModalForm />
      </Modal>
    </div>
  );
};

export default observer(Todos);
