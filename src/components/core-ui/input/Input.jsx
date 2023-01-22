import React, { memo } from "react";

import StyledInput from "./Input.styled";

const Input = ({ value = "", ...props }) => {
  return (
    <StyledInput
      value={value}
      {...props}
    />
  );
};

export default memo(Input);
