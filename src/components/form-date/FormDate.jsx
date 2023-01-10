import React, { memo } from "react";
import { StyledDateInput, StyledLabel } from "./FormDate.styled";

const FormDate = ({ title, id, value = "", onChange, property, ...props }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledDateInput
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value, property)}
        {...props}
      />
    </div>
  );
};

export default memo(FormDate);
