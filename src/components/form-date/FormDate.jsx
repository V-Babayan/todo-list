import React from "react";
import { StyledDateInput, StyledLabel } from "./FormDate.styled";

const FormDate = ({ title, id, ...props }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledDateInput id={id} {...props} />
    </div>
  );
};

export default FormDate;
