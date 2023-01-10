import React, { memo } from "react";

import { StyledRadio, StyledLabel, StyledPriorityRadio } from "./Radio.styled";

let i = 0;

const Radio = ({ id, checked, changePriority, ...props }) => {
  console.log("radio: " + ++i);
  return (
    <StyledPriorityRadio>
      <StyledRadio
        name='priority'
        id={id}
        checked={checked}
        onChange={() => changePriority(id)}
        {...props}
      />
      <StyledLabel htmlFor={id}>{id}</StyledLabel>
    </StyledPriorityRadio>
  );
};

export default memo(Radio);
