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

export default memo(
  Input
  //   , (prevProps, currentProps) => {
  //   console.log("prevProps: ", prevProps);
  //   console.log("currentProps: ", currentProps);
  //   console.log("areEqual: ", currentProps === prevProps);
  // }
);
