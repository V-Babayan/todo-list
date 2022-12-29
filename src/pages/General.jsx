import React, { memo, useState, useMemo } from "react";

import Modal from "../components/modal/Modal";
import TodoList from "../components/todo-list/TodoList";
import ModalForm from "../components/modal-form/ModalForm";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";
import Header from "../components/header/Header";

const initialTodos = [
  {
    id: 1,
    title: "Todos project is completed again over of dead line",
    description: "Create react app 'Todos list'.",
    created: new Date(2022, 2, 12),
    expected: new Date(2022, 3, 12),
    priority: "low",
    isActive: true,
  },
  {
    id: 2,
    title: "Calculator",
    description: "Create react app 'Calculator'.",
    created: new Date(2022, 2, 13),
    expected: new Date(2022, 2, 18),
    priority: "high",
    isActive: false,
  },
  {
    id: 3,
    title: "Physics",
    description: "Run 5kms.",
    created: new Date(2022, 2, 18),
    expected: new Date(2022, 3, 1),
    priority: "medium",
    isActive: true,
  },
  {
    id: 4,
    title: "Practics",
    description: "Practics react styled-components.",
    created: new Date(2022, 2, 10),
    expected: new Date(2022, 2, 15),
    priority: "low",
    isActive: false,
  },
];

function General() {
  const [todos, setTodos] = useState(initialTodos);
  const [modalActive, setModalActive] = useState(false);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [currentTodo, setCurrentTodo] = useState({});

  const sortedAndSearchedTodos = useTodos(filter, todos);

  const changeIsActive = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item.isActive = !item.isActive;
        return item;
      })
    );
  };

  const changeTodoModal = (item) => {
    setCurrentTodo(item);
    setModalActive(true);
  };

  const isCreate = useMemo(() => Object.keys(currentTodo).length === 0, [modalActive]);

  const modalOpenAndClose = (modalValue) => {
    setCurrentTodo({});
    setModalActive(modalValue);
  };

  const changingTodo = () => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === currentTodo.id) return currentTodo;
        return elem;
      })
    );
    modalOpenAndClose(false);
  };

  const createItem = () => {
    setTodos([...todos, { ...currentTodo, id: Date.now(), isActive: true }]);
    modalOpenAndClose(false);
  };

  const removeTodo = () => {
    setTodos(todos.filter((item) => item.id !== currentTodo.id));
    modalOpenAndClose(false);
  };

  return (
    <div>
      <Header />
      <FilterForm filter={filter} setFilter={setFilter} create={() => modalOpenAndClose(true)} />
      <TodoList
        todos={sortedAndSearchedTodos}
        change={changeTodoModal}
        changeIsActive={changeIsActive}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalForm
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          create={createItem}
          change={changingTodo}
          remove={removeTodo}
          isCreate={isCreate}
        />
      </Modal>
    </div>
  );
}

export default memo(General);
