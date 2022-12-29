import React, { useCallback, useMemo, useState } from "react";

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
import { dateToString, stringToDate } from "../../helpers/dateWorking";
import FormDate from "../form-date/FormDate";

const ModalForm = ({ item = {}, create, change, remove }) => {
  const [currentTodo, setCurrentTodo] = useState(() => item);

  const { priority, created, expected } = currentTodo;

  const changeDate = (date, property) => {
    const res = Object.create(currentTodo);
    res[property] = stringToDate(date);

    setCurrentTodo(res);
  };

  const changePriority = useCallback(
    (priority) => {
      setCurrentTodo({ ...currentTodo, priority });
    },
    [currentTodo]
  );

  const isCreate = useMemo(() => !Object.keys(item).length, [item]);

  return (
    <StyledForm>
      <FormInput
        title={"Title"}
        value={currentTodo.title || ""}
        setValue={(newValue) => setCurrentTodo({ ...currentTodo, title: newValue })}
      />
      <FormInput
        title={"Description"}
        value={currentTodo.description || ""}
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
          <FormButton item={currentTodo} func={create}>
            Create
          </FormButton>
        ) : (
          <>
            <FormButton item={currentTodo} func={change}>
              Change
            </FormButton>
            <FormButton func={remove}>Remove</FormButton>
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default ModalForm;
