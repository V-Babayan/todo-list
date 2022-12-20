import React from "react";

import { StyledTitle } from "./FormInput.styled";
import Input from "../core-ui/input/Input";

const FormInput = ({ title, value, setValue }) => {
  return (
    <div>
      <StyledTitle htmlFor='id'>{title}</StyledTitle>
      <Input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default FormInput;
