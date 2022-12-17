import React, { memo, useState } from "react";
import styled from "styled-components";

import Modal from "./components/modal/Modal";
import TodoList from "./components/todo-list/TodoList";
import MyButton from "./components/core-ui/button/Button";
import ModalForm from "./components/ModalForm";

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
  const [isModalActive, setIsModalActive] = useState(false);

  const changeIsActive = (id, value) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item.isActive = value;
        return item;
      })
    );
  };

  const changeTodoModal = (item) => {
    setIsModalActive(true);
    changingTodoItem = item;
  };

  const createItem = (item) => {
    setTodos([...todos, { ...item, id: Date.now(), isActive: true }]);
    setIsModalActive(false);
  };

  const changingTodo = (item) => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === changingTodoItem.id) return item;
        return elem;
      })
    );
    setIsModalActive(false);
    changingTodoItem = {};
  };

  const removeTodo = () => {
    setTodos(todos.filter((elem) => elem.id !== changingTodoItem.id));
    setIsModalActive(false);
  };

  return (
    <StyledApp>
      <MyButton
        onClick={() => {
          changingTodoItem = {};
          setIsModalActive(true);
        }}>
        Create Todo
      </MyButton>
      <TodoList todos={todos} change={changeTodoModal} changeIsActive={changeIsActive} />
      <Modal active={isModalActive} setActive={setIsModalActive}>
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
