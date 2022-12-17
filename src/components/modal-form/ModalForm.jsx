import React, { useCallback, useMemo, useState } from "react";

import {
  StyledForm,
  StyledTitle,
  StyledFieldset,
  StyledLegend,
  StyledInputsContainer,
  StyledButtonsContainer,
} from "./ModalForm.styled";
import Input from "../core-ui/input/Input";
import Button from "../core-ui/button/Button";
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
        <Input
          value={newTodo.title || ""}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
      </div>
      <div>
        <StyledTitle>Description</StyledTitle>
        <Input
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
          <Button
            onClick={(e) => {
              e.preventDefault();
              create(newTodo);
            }}>
            Create
          </Button>
        ) : (
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                change(newTodo);
              }}>
              Change
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                remove();
              }}>
              Remove
            </Button>
          </>
        )}
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default ModalForm;
