import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

import Todo from "../store/Todo";
import { observer } from "mobx-react-lite";

import FilterForm from "../components/filter-form/FilterForm";
import TodoList from "../components/todo-list/TodoList";
import Modal from "../components/modal/Modal";
import ModalForm from "../components/modal-form/ModalForm";

const Archive = observer(() => {
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const sortedAndSearchedTodos = useTodos(filter, Todo.archive);

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
});

export default Archive;
