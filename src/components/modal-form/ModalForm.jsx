import React, { useCallback, useMemo, useState } from "react";

import {
  StyledForm,
  StyledTitle,
  StyledFieldset,
  StyledLegend,
  StyledInputsContainer,
  StyledButtonsContainer,
} from "./ModalForm.styled";
import MyInput from "../core-ui/input/Input";
import MyButton from "../core-ui/button/Button";
import FormPrioritySelect from "../form-priority-select/FormPrioritySelect";

const ModalForm = ({ item = {}, create, change, remove }) => {
  const [newTodo, setNewTodo] = useState(item);

  const changePriority = useCallback(
    (priority) => {
      setNewTodo({ ...newTodo, priority });
    },
    [newTodo]
  );

  const isCreate = useMemo(() => Object.keys(item).length, [item]);

  return (
    <StyledForm>
      <div>
        <StyledTitle>Title</StyledTitle>
        <MyInput
          value={newTodo.title || ""}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
      </div>
      <div>
        <StyledTitle>Description</StyledTitle>
        <MyInput
          value={newTodo.description || ""}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
      </div>

      <StyledFieldset>
        <StyledLegend>Priority</StyledLegend>
        <StyledInputsContainer>
          <FormPrioritySelect
            priority={newTodo.priority}
            id="high"
            changePriority={changePriority}
          />

          <FormPrioritySelect
            priority={newTodo.priority}
            id="medium"
            changePriority={changePriority}
          />

          <FormPrioritySelect
            priority={newTodo.priority}
            id="low"
            changePriority={changePriority}
          />
        </StyledInputsContainer>
      </StyledFieldset>

      <StyledButtonsContainer>
        {isCreate ? (
          <MyButton
            onClick={(e) => {
              e.preventDefault();
              create(newTodo);
            }}>
            Create
          </MyButton>
        ) : (
          <>
            <MyButton
              onClick={(e) => {
                e.preventDefault();
                change(newTodo);
              }}>
              Change
            </MyButton>
            <MyButton
              onClick={(e) => {
                e.preventDefault();
                remove();
              }}>
              Remove
            </MyButton>
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default ModalForm;
