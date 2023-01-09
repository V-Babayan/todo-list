import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
  StyledRadioContainer,
  StyledButtonsContainer,
  StyledDatesContainer,
} from "./ModalForm.styled";

import FormPriorityRadio from "../form-priority-radio/FormPriorityRadio";
import FormInput from "../form-input/FormInput";
import { dateToString } from "../../helpers/dateWorking";
import FormDate from "../form-date/FormDate";
import Button from "../core-ui/button/Button";

import Todo from "../../store/Todo";
import { observer } from "mobx-react-lite";
import ModalStore from "../../store/ModalStore";

const ModalForm = () => {
  const [currentTodo, setCurrentTodo] = useState(Todo.currentTodo);
  const { title, description, priority, created, expected } = currentTodo;

  const location = useLocation();

  const changeDate = (date, property) => {
    const res = { ...currentTodo };
    res[property] = new Date(date);

    setCurrentTodo(res);
  };

  const changePriority = (priority) => {
    setCurrentTodo({ ...currentTodo, priority });
  };

  const changeHandle = () => {
    Todo.changingTodo(currentTodo);
  };

  const removeHandle = () => {
    Todo.removeTodo(location.pathname);
  };

  const createHandle = () => {
    Todo.createTodo(currentTodo);
  };

  const isCreate = useMemo(() => Object.keys(Todo.currentTodo).length === 0, []);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        ModalStore.toggleModal();
      }}>
      <FormInput
        title={"Title"}
        value={title}
        setValue={(newValue) => setCurrentTodo({ ...currentTodo, title: newValue })}
      />
      <FormInput
        title={"Description"}
        value={description}
        setValue={(newValue) => setCurrentTodo({ ...currentTodo, description: newValue })}
      />

      <StyledFieldset>
        <StyledLegend>Priority</StyledLegend>
        <StyledRadioContainer>
          <FormPriorityRadio
            priority={priority}
            id='high'
            changePriority={changePriority}
          />
          <FormPriorityRadio
            priority={priority}
            id='medium'
            changePriority={changePriority}
          />
          <FormPriorityRadio
            priority={priority}
            id='low'
            changePriority={changePriority}
          />
        </StyledRadioContainer>
      </StyledFieldset>

      <StyledDatesContainer>
        <FormDate
          title='Created by:'
          value={!created ? "" : dateToString(created)}
          onChange={(e) => changeDate(e.target.value, "created")}
        />
        <FormDate
          title='Expected by:'
          value={!expected ? "" : dateToString(expected)}
          onChange={(e) => changeDate(e.target.value, "expected")}
        />
      </StyledDatesContainer>

      <StyledButtonsContainer>
        {isCreate ? (
          <Button onClick={createHandle}>Create</Button>
        ) : (
          <>
            <Button onClick={changeHandle}>Save</Button>
            <Button onClick={removeHandle}>Remove</Button>
            {location.pathname === "/todos" && (
              <Button onClick={() => Todo.archivingTodo()}>Archive</Button>
            )}
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default observer(ModalForm);
