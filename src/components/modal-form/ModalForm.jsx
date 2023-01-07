import React, { memo, useState, useMemo } from "react";

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

const ModalForm = ({ create, change, remove, initialTodo = {} }) => {
  const [currentTodo, setCurrentTodo] = useState(initialTodo);

  const { title, description, priority, created, expected } = currentTodo;

  const changeDate = (date, property) => {
    const res = { ...currentTodo };
    res[property] = new Date(date);

    setCurrentTodo(res);
  };

  const changePriority = (priority) => {
    setCurrentTodo({ ...currentTodo, priority });
  };

  const isCreate = useMemo(() => Object.keys(currentTodo).length === 0, []);

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
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
          <Button onClick={() => create(currentTodo)}>Create</Button>
        ) : (
          <>
            <Button onClick={() => change(currentTodo)}>Change</Button>
            <Button onClick={() => remove(currentTodo)}>Remove</Button>
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default memo(ModalForm);
