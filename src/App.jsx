import React, { memo, useState, useMemo } from "react";
import styled from "styled-components";

import Modal from "./components/modal/Modal";
import TodoList from "./components/todo-list/TodoList";
import Button from "./components/core-ui/button/Button";
import ModalForm from "./components/modal-form/ModalForm";

const StyledApp = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
`;

let changingTodoItem;

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

  const changeIsActive = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item.isActive = !item.isActive;
        return item;
      })
    );
  };

  const changeTodoModal = (item) => {
    setModalActive(true);
    changingTodoItem = item;
  };

  const changingTodo = (item) => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === item.id) return item;
        return elem;
      })
    );
    setModalActive(false);
    changingTodoItem = {};
  };

  const createItem = (item) => {
    setTodos([...todos, { ...item, id: Date.now(), isActive: true }]);
    setModalActive(false);
  };

  const removeTodo = () => {
    setTodos(todos.filter((elem) => elem.id !== changingTodoItem.id));
    setModalActive(false);
  };

  return (
    <StyledApp>
      <Button
        onClick={() => {
          changingTodoItem = {};
          setModalActive(true);
        }}>
        Create Todo
      </Button>
      <TodoList todos={todos} change={changeTodoModal} changeIsActive={changeIsActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalForm
          item={changingTodoItem}
          create={createItem}
          change={changingTodo}
          remove={removeTodo}
        />
      </Modal>
    </StyledApp>
  );
}

export default memo(App);
