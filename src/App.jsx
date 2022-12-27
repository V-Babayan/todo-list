import React, { memo, useState } from "react";

import Modal from "./components/modal/Modal";
import TodoList from "./components/todo-list/TodoList";
import Button from "./components/core-ui/button/Button";
import ModalForm from "./components/modal-form/ModalForm";

let currentTodo;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todos project is completed again over of dead line",
      description: "Create react app 'Todos list'.",
      created: new Date().toLocaleDateString(),
      expected: new Date().toLocaleDateString(),
      priority: "low",
      isActive: true,
    },
    {
      id: 2,
      title: "Calculator",
      description: "Create react app 'Calculator'.",
      created: new Date().toLocaleDateString(),
      expected: new Date().toLocaleDateString(),
      priority: "high",
      isActive: false,
    },
    {
      id: 3,
      title: "Physics",
      description: "Run 5kms.",
      created: new Date().toLocaleDateString(),
      expected: new Date().toLocaleDateString(),
      priority: "medium",
      isActive: true,
    },
    {
      id: 4,
      title: "Practics",
      description: "Practics react styled-components.",
      created: new Date().toLocaleDateString(),
      expected: new Date().toLocaleDateString(),
      priority: "low",
      isActive: false,
    },
  ]);
  const [modalActive, setModalActive] = useState(false);
  // const [currentTodo, setCurrentTodo] = useState({});

  const changeIsActive = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item.isActive = !item.isActive;
        return item;
      })
    );
  };

  const changeTodoModal = (item) => {
    // setCurrentTodo(item);
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
    // setCurrentTodo({});
    currentTodo = {};
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
      <Button
        onClick={() => {
          // setCurrentTodo({});
          currentTodo = {};
          setModalActive(true);
        }}>
        Create Todo
      </Button>
      <TodoList todos={todos} change={changeTodoModal} changeIsActive={changeIsActive} />
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

export default memo(App);
