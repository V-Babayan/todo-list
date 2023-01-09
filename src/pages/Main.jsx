import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/core-ui/button/Button";
import { StyledTitle } from "../components/todo-list/TodoList.styled";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledTitle>
        Are you ready?
        <br />
        <Button onClick={() => navigate("/todos")}>Start</Button>
      </StyledTitle>
    </>
  );
};

export default Main;
