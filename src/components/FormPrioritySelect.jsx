import React from "react";
import styled from "styled-components";
import MyRadio from "./UI/MyRadio";

const StyledPriorityRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const StyledLabel = styled.label`
  text-transform: capitalize;
  color: ${({ htmlFor, theme }) => theme.priorityColors[htmlFor] || theme.primary.violet};
`;

const FormPrioritySelect = ({ priority, id, changePriority }) => {
  return (
    <StyledPriorityRadio>
      <MyRadio
        name="priority"
        id={id}
        defaultChecked={priority === id}
        onClick={() => changePriority(id)}
      />
      <StyledLabel htmlFor={id}>{id}</StyledLabel>
    </StyledPriorityRadio>
  );
};

export default FormPrioritySelect;
