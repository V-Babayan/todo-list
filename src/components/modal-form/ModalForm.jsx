import React, { useCallback, useMemo, useEffect, useState } from "react";

import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
  StyledRadioContainer,
  StyledButtonsContainer,
} from "./ModalForm.styled";

import FormPriorityRadio from "../form-priority-radio/FormPriorityRadio";
import FormInput from "../form-input/FormInput";
import FormButton from "../FormButton";

const ModalForm = ({ item = {}, create, change, remove }) => {
  const [currentTodo, setCurrentTodo] = useState(() => item);

  useEffect(() => {
    setCurrentTodo(item);
  }, [item]);

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
          <FormPriorityRadio
            priority={currentTodo.priority}
            id='high'
            changePriority={changePriority}
          />
          <FormPriorityRadio
            priority={currentTodo.priority}
            id='medium'
            changePriority={changePriority}
          />
          <FormPriorityRadio
            priority={currentTodo.priority}
            id='low'
            changePriority={changePriority}
          />
        </StyledRadioContainer>
      </StyledFieldset>

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
