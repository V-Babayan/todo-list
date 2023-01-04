import React from "react";

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

const TodoItem = ({ item, index, changeCompleted, modalOpenAndClose }) => {
  const { id, title, completed, description, created, expected, priority } = item;

  return (
    <StyledTodoItem priority={priority}>
      <Checkbox onClick={() => changeCompleted(id)} completed={completed} />
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
      <Button onClick={() => modalOpenAndClose(true, item)}>Change</Button>
    </StyledTodoItem>
  );
};

export default TodoItem;
