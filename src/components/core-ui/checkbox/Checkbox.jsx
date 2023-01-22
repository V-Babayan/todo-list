import React, { memo } from "react";

import { StyledCheckbox } from "./Checkbox.styled";
import CheckBird from "../../../icons/CheckBird.icon";

const Chackbox = ({ completed, ...props }) => {
  return <StyledCheckbox {...props}>{completed && <CheckBird />}</StyledCheckbox>;
};

export default memo(Chackbox);
