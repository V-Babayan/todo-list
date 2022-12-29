import React from "react";
import { StyledDateInput, StyledLabel } from "./FormDate.styled";

const FormDate = ({ title, id, value = "", ...props }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledDateInput id={id} value={value} {...props} />
    </div>
  );
};

export default FormDate;
