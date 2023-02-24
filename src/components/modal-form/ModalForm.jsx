import React, { useState, useMemo, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
  StyledRadioContainer,
  StyledButtonsContainer,
  StyledDatesContainer,
} from "./ModalForm.styled";

import FormInput from "../form-input/FormInput";
import { dateToString } from "../../helpers/dateWorking";
import FormDate from "../form-date/FormDate";
import Button from "../core-ui/button/Button";

import Todo from "../../store/Todo";
import { observer } from "mobx-react-lite";
import Radio from "../core-ui/radio/Radio";
import { Paths } from "../../helpers/consts";
import { useModal } from "../../hooks/useModal";

const ModalForm = () => {
  const [currentTodo, setCurrentTodo] = useState(Todo.currentTodo);
  const { title, description, priority, created, expected } = currentTodo;
  const { toggleModal } = useModal();

  // for actual value of currentTodo in useCallbacks createTodo and changeTodo
  const refOfTodo = useRef("");
  refOfTodo.current = currentTodo;

  const location = useLocation();

  const changeDate = useCallback((date, property) => {
    setCurrentTodo((prev) => {
      const res = { ...prev };
      res[property] = new Date(date);
      return res;
    });
  }, []);

  const changePriority = useCallback(
    (priority) => setCurrentTodo((prev) => ({ ...prev, priority })),
    []
  );

  const titleOnChange = useCallback(
    (newValue) => setCurrentTodo((prev) => ({ ...prev, title: newValue })),
    []
  );
  const descriptionOnChange = useCallback(
    (newValue) => setCurrentTodo((prev) => ({ ...prev, description: newValue })),
    []
  );

  const createHandle = useCallback(() => {
    Todo.createTodo(refOfTodo.current);
  }, []);

  const changeHandle = useCallback(() => {
    Todo.changingTodo(refOfTodo.current);
  }, []);

  const removeHandle = useCallback(() => {
    Todo.removeTodo(location.pathname);
  }, [location.pathname]);

  const archivingHandle = useCallback(() => Todo.archivingTodo(), []);

  const isCreate = useMemo(() => Object.keys(Todo.currentTodo).length === 0, []);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        toggleModal();
      }}>
      <FormInput
        title={"Title"}
        value={title}
        setValue={titleOnChange}
      />
      <FormInput
        title={"Description"}
        value={description}
        setValue={descriptionOnChange}
      />

      <StyledFieldset>
        <StyledLegend>Priority</StyledLegend>
        <StyledRadioContainer>
          <Radio
            checked={priority === "high"}
            id='high'
            changePriority={changePriority}
          />
          <Radio
            priority={priority === "medium"}
            id='medium'
            changePriority={changePriority}
          />
          <Radio
            priority={priority === "low"}
            id='low'
            changePriority={changePriority}
          />
        </StyledRadioContainer>
      </StyledFieldset>

      <StyledDatesContainer>
        <FormDate
          title='Created by:'
          property='created'
          value={!created ? "" : dateToString(created)}
          onChange={changeDate}
        />
        <FormDate
          title='Expected by:'
          property='expected'
          value={!expected ? "" : dateToString(expected)}
          onChange={changeDate}
        />
      </StyledDatesContainer>

      <StyledButtonsContainer>
        {isCreate ? (
          <Button onClick={createHandle}>Create</Button>
        ) : (
          <>
            <Button onClick={changeHandle}>Save</Button>
            <Button onClick={removeHandle}>Remove</Button>
            {location.pathname === Paths.TODOS && (
              <Button onClick={archivingHandle}>Archive</Button>
            )}
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default observer(ModalForm);
