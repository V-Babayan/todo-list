import React, { memo } from "react";

import { StyledRadio, StyledLabel, StyledPriorityRadio } from "./Radio.styled";

const Radio = ({ id, checked, changePriority, ...props }) => {
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
