import React from "react";

import { StyledSelect } from "./StyledSelect";

const Select = ({ defaultTitle, options = [], setValue, value }) => {
  return (
    <StyledSelect value={value} onChange={(e) => setValue(e.target.value)}>
      <option disabled>{defaultTitle}</option>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
