import React, { useCallback, useMemo, useState } from "react";

import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
  StyledRadioContainer,
  StyledButtonsContainer,
} from "./ModalForm.styled";

import FormPrioritySelect from "../form-priority-select/FormPrioritySelect";
import FormInput from "../form-input/FormInput";
import FormButton from "../FormButton";

const ModalForm = ({ item = {}, create, change, remove }) => {
  const [newTodo, setNewTodo] = useState(() => item);

  const changePriority = useCallback(
    (priority) => {
      setNewTodo({ ...newTodo, priority });
    },
    [newTodo]
  );

  const isCreate = useMemo(() => !Object.keys(item).length, [item]);

  return (
    <StyledForm>
      <FormInput
        title={"Title"}
        value={newTodo.title || ""}
        setValue={(newValue) => setNewTodo({ ...newTodo, title: newValue })}
      />
      <FormInput
        title={"Description"}
        value={newTodo.description || ""}
        setValue={(newValue) => setNewTodo({ ...newTodo, description: newValue })}
      />

      <StyledFieldset>
        <StyledLegend>Priority</StyledLegend>
        <StyledRadioContainer>
          <FormPrioritySelect
            priority={newTodo.priority}
            id='high'
            changePriority={changePriority}
          />

          <FormPrioritySelect
            priority={newTodo.priority}
            id='medium'
            changePriority={changePriority}
          />

          <FormPrioritySelect
            priority={newTodo.priority}
            id='low'
            changePriority={changePriority}
          />
        </StyledRadioContainer>
      </StyledFieldset>

      <StyledButtonsContainer>
        {isCreate ? (
          <FormButton func={create}>Create</FormButton>
        ) : (
          <>
            <FormButton item={newTodo} func={change}>
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
