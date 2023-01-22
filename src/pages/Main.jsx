import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/core-ui/button/Button";
import { StyledTitle } from "../components/todo-list/TodoList.styled";
import { Paths } from "../helpers/consts";

const Main = () => {
  const navigate = useNavigate();

  const clickHandle = useCallback(() => navigate(Paths.TODOS), [navigate]);

  return (
    <>
      <StyledTitle>
        Are you ready?
        <br />
        <Button onClick={clickHandle}>Start</Button>
      </StyledTitle>
    </>
  );
};

export default Main;
