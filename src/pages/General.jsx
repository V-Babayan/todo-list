import React, { memo, useState, useMemo, useEffect } from "react";

import Modal from "../components/modal/Modal";
import TodoList from "../components/todo-list/TodoList";
import ModalForm from "../components/modal-form/ModalForm";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";
import Header from "../components/header/Header";
import { useFetching } from "../hooks/useFetching";

function General() {
  const [todos, setTodos] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [currentTodo, setCurrentTodo] = useState({});
  const [fetching, isLoading, error] = useFetching(async () => {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
    setTodos(data);
  });

  const sortedAndSearchedTodos = useTodos(filter, todos);

  useEffect(() => {
    fetching();
  }, []);

  const changeCompleted = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      })
    );
  };

  const isCreate = useMemo(() => Object.keys(currentTodo).length === 0, [modalActive]);

  const modalOpenAndClose = (modalValue, todo = {}) => {
    setCurrentTodo(todo);
    setModalActive(modalValue);
  };

  const createTodo = () => {
    setTodos([...todos, { ...currentTodo, id: Date.now(), completed: true }]);
    modalOpenAndClose(false);
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

  const removeTodo = () => {
    setTodos(todos.filter((item) => item.id !== currentTodo.id));
    modalOpenAndClose(false);
  };

  return (
    <div>
      <Header modalOpenAndClose={modalOpenAndClose} />
      <FilterForm filter={filter} setFilter={setFilter} />

      <TodoList
        isLoading={isLoading}
        todos={sortedAndSearchedTodos}
        modalOpenAndClose={modalOpenAndClose}
        changeCompleted={changeCompleted}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalForm
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          create={createTodo}
          change={changingTodo}
          remove={removeTodo}
          isCreate={isCreate}
        />
      </Modal>
    </div>
  );
}

export default memo(General);
