import React, { memo } from "react";

import StyledButton from "./Button.styled";

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default memo(Button);
