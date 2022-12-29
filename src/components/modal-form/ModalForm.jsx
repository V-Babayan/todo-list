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

      <StyledDatesContainer>
        <FormDate
          title='Created by:'
          value={currentTodo.created ? dateToString(currentTodo.created) : ""}
          onChange={(e) =>
            setCurrentTodo({ ...currentTodo, created: stringToDate(e.target.value) })
          }
        />
        <FormDate
          title='Expected by:'
          value={currentTodo.expected ? dateToString(currentTodo.expected) : ""}
          onChange={(e) =>
            setCurrentTodo({ ...currentTodo, expected: stringToDate(e.target.value) })
          }
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
