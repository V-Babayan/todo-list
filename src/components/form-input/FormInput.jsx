import React, { memo, useCallback } from "react";

import { StyledTitle } from "./FormInput.styled";
import Input from "../core-ui/input/Input";

const FormInput = ({ title, value, setValue }) => {
  const changeHandle = useCallback((e) => setValue(e.target.value), [setValue]);

  return (
    <div>
      <StyledTitle htmlFor='id'>{title}</StyledTitle>
      <Input
        type='text'
        value={value}
        onChange={changeHandle}
      />
    </div>
  );
};

export default memo(FormInput);
