import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import MyInput from "./core-ui/input/Input";
import MyButton from "./core-ui/button/Button";
import FormPrioritySelect from "./FormPrioritySelect";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTitle = styled.label`
  color: ${({ theme }) => theme.primary.green};
  text-transform: capitalize;
`;

const StyledFieldset = styled.fieldset`
  border: 3px solid ${({ theme }) => theme.primary.green};
  border-radius: 5px;
  padding: 10px;
`;
const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.primary.green};
`;

const StyledInputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledButtonsContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
`;

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
