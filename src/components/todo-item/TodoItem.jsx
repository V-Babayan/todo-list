import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";

import { observer } from "mobx-react-lite";
import ModalStore from "../../store/ModalStore";

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

const TodoItem = ({ item, index }) => {
  const location = useLocation();
  const { title, completed, description, created, expected, priority } = item;
  const changeHandle = useCallback(() => {
    Todo.setCurrentTodo(item);
    ModalStore.toggleModal();
  }, [item]);
  const recoverHandle = useCallback(() => {
    Todo.setCurrentTodo(item);
    Todo.recoverTodo(location.pathname);
  }, [item]);

  return (
    <StyledTodoItem priority={priority}>
      <Checkbox
        onClick={() => Todo.toggleCompleted(item)}
        completed={completed}
      />
      <StyledTodoInfo>
        <div>
          <StyledTodoTitle completed={completed}>{index + 1 + "." + title}</StyledTodoTitle>
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
      <Button onClick={changeHandle}>{location.pathname === "/trash" ? "Delete" : "Change"}</Button>
      {location.pathname !== "/todos" && <Button onClick={recoverHandle}>Recover</Button>}
    </StyledTodoItem>
  );
};

export default observer(TodoItem);
