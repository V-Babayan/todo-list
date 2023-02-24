import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";

import { observer } from "mobx-react-lite";

import {
  StyledTodoItem,
  StyledTodoInfo,
  StyledTodoTitle,
  StyledTodoSubtitle,
  StyledDateContainer,
  StyledDate,
} from "./TodoItem.styled";

import Checkbox from "../core-ui/checkbox/Checkbox";
import Button from "../core-ui/button/Button";
import { dateToLocalString } from "../../helpers/dateWorking";

import Todo from "../../store/Todo";
import { Paths } from "../../helpers/consts";
import { useModal } from "../../hooks/useModal";

const TodoItem = ({ item }) => {
  console.log("Item: ", item.id);

  const location = useLocation();
  const { title, completed, description, created, expected, priority } = item;
  const { toggleModal } = useModal();

  const changeHandle = useCallback(() => {
    Todo.setCurrentTodo(item);
    toggleModal();
  }, [item]);

  const recoverHandle = useCallback(() => {
    Todo.setCurrentTodo(item);
    Todo.recoverTodo(location.pathname);
  }, [item, location.pathname]);

  const checkHandle = useCallback(() => Todo.toggleCompleted(item), [item]);

  return (
    <StyledTodoItem priority={priority}>
      <Checkbox
        onClick={checkHandle}
        completed={completed}
      />

      <StyledTodoInfo>
        <div>
          <StyledTodoTitle completed={completed}>{title}</StyledTodoTitle>
          <StyledTodoSubtitle completed={completed}>{description}</StyledTodoSubtitle>
        </div>
        {(created || expected) && (
          <StyledDateContainer>
            {created && (
              <StyledDate content={"Created by: "}>{dateToLocalString(created)}</StyledDate>
            )}
            {expected && (
              <StyledDate content={"Expected by: "}>{dateToLocalString(expected)}</StyledDate>
            )}
          </StyledDateContainer>
        )}
      </StyledTodoInfo>
      <Button onClick={changeHandle}>
        {location.pathname === Paths.TRASH ? "Delete" : "Change"}
      </Button>
      {location.pathname !== Paths.TODOS && <Button onClick={recoverHandle}>Recover</Button>}
    </StyledTodoItem>
  );
};

export default observer(TodoItem);
