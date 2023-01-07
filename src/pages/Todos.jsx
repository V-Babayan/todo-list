import React, { memo, useState, useEffect, useRef } from "react";
import axios from "axios";

import Modal from "../components/modal/Modal";
import TodoList from "../components/todo-list/TodoList";
import ModalForm from "../components/modal-form/ModalForm";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";
import { useFetching } from "../hooks/useFetching";
import Button from "../components/core-ui/button/Button";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modalActive, setModalActive] = useState(false);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: { _limit: 10, _page: 1 },
    });
    setTodos([...todos, ...response.data]);
  });
  const currentTodo = useRef({});

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

  const createTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), completed: true }]);
    currentTodo.current = {};
    setModalActive(false);
  };
  const changingModal = (todo) => {
    currentTodo.current = todo;
    setModalActive(true);
  };

  const changingTodo = (todo) => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === todo.id) return todo;
        return elem;
      })
    );
    currentTodo.current = {};
    setModalActive(false);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    currentTodo.current = {};
    setModalActive(false);
  };

  return (
    <div>
      <FilterForm
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        isLoading={isLoading}
        todos={sortedAndSearchedTodos}
        modalOpenAndClose={setModalActive}
        changingModal={changingModal}
        changeCompleted={changeCompleted}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}>
        <ModalForm
          initialTodo={currentTodo.current}
          create={createTodo}
          change={changingTodo}
          remove={removeTodo}
        />
      </Modal>
    </div>
  );
};

export default memo(Todos);
