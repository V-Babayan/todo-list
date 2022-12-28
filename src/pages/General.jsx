import React, { memo, useState } from "react";

import Modal from "../components/modal/Modal";
import TodoList from "../components/todo-list/TodoList";
import ModalForm from "../components/modal-form/ModalForm";
import { useTodos } from "../hooks/useTodos";
import FilterForm from "../components/filter-form/FilterForm";

let currentTodo;

function General() {
  const [todos, setTodos] = useState([
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
  ]);
  const [modalActive, setModalActive] = useState(false);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
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
    currentTodo = item;
    setModalActive(true);
  };

  const changingTodo = (item) => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === item.id) return item;
        return elem;
      })
    );
    setModalActive(false);
    currentTodo = {};
  };

  const creatingHundle = () => {
    currentTodo = {};
    setModalActive(true);
  };

  const createItem = (item) => {
    setTodos([...todos, { ...item, id: Date.now(), isActive: true }]);
    setModalActive(false);
  };

  const removeTodo = () => {
    setTodos(todos.filter((elem) => elem.id !== currentTodo.id));
    setModalActive(false);
  };

  return (
    <div>
      <FilterForm filter={filter} setFilter={setFilter} create={creatingHundle} />
      <TodoList
        todos={sortedAndSearchedTodos}
        change={changeTodoModal}
        changeIsActive={changeIsActive}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalForm
          item={currentTodo}
          create={createItem}
          change={changingTodo}
          remove={removeTodo}
        />
      </Modal>
    </div>
  );
}

export default memo(General);
