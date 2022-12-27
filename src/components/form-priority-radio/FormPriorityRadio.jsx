import React from "react";

import { StyledPriorityRadio, StyledLabel } from "./FormPriorityRadio.styled";
import Radio from "../core-ui/radio/Radio";

const FormPriorityRadio = ({ priority, id, changePriority }) => {
  return (
    <StyledPriorityRadio>
      <Radio
        name='priority'
        id={id}
        checked={priority === id}
        onChange={() => changePriority(id)}
      />
      <StyledLabel htmlFor={id}>{id}</StyledLabel>
    </StyledPriorityRadio>
  );
};

export default FormPriorityRadio;
