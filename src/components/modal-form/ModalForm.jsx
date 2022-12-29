import React, { useCallback } from "react";

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
import FormButton from "../FormButton";
import { dateToString } from "../../helpers/dateWorking";
import FormDate from "../form-date/FormDate";

const ModalForm = ({ create, change, remove, currentTodo, setCurrentTodo, isCreate }) => {
  const { title, description, priority, created, expected } = currentTodo;

  const changeDate = (date, property) => {
    const res = Object.create(currentTodo);
    res[property] = new Date(date);

    setCurrentTodo(res);
  };

  const changePriority = useCallback(
    (priority) => {
      setCurrentTodo({ ...currentTodo, priority });
    },
    [currentTodo]
  );

  return (
    <StyledForm>
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
          <FormPriorityRadio priority={priority} id='high' changePriority={changePriority} />
          <FormPriorityRadio priority={priority} id='medium' changePriority={changePriority} />
          <FormPriorityRadio priority={priority} id='low' changePriority={changePriority} />
        </StyledRadioContainer>
      </StyledFieldset>

      <StyledDatesContainer>
        <FormDate
          title='Created by:'
          value={dateToString(created)}
          onChange={(e) => changeDate(e.target.value, "created")}
        />
        <FormDate
          title='Expected by:'
          value={dateToString(expected)}
          onChange={(e) => changeDate(e.target.value, "expected")}
        />
      </StyledDatesContainer>

      <StyledButtonsContainer>
        {isCreate ? (
          <FormButton func={create}>Create</FormButton>
        ) : (
          <>
            <FormButton func={change}>Change</FormButton>
            <FormButton func={remove}>Remove</FormButton>
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default ModalForm;
