import React from "react";

import { StyledPriorityRadio, StyledLabel } from "./FormPrioritySelect.styled";
import MyRadio from "../core-ui/radio/Radio";

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
