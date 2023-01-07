import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";

import Todo from "../store/Todo";
import TodoList from "../components/todo-list/TodoList";
import Modal from "../components/modal/Modal";
import DeleteModal from "../components/delete-modal/DeleteModal";

import { observer } from "mobx-react-lite";

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

      <Modal>
        <DeleteModal />
      </Modal>
    </div>
  );
};

export default observer(Trash);
