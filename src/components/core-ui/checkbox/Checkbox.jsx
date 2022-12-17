import React from "react";

import { StyledCheckbox, StyledIcon } from "./Checkbox.styled";

const MyChackbox = ({ isActive, ...props }) => {
  return (
    <StyledCheckbox {...props}>
      {!isActive && (
        <StyledIcon viewBox="180 70 128 99">
          <path d="M 185.333 118 L 180 130.667 L 216.333 169 L 308 76 L 302.333 70 L 216.333 143.333 L 185.333 118 Z" />
        </StyledIcon>
      )}
    </StyledCheckbox>
  );
};

export default MyChackbox;
