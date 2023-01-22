import React, { useCallback, memo } from "react";

import Input from "../core-ui/input/Input";
import Select from "../core-ui/select/Select";
import { StyledFilterForm } from "./FilterForm.styled";
import { options } from "../../helpers/consts";

const FilterForm = ({ filter, setFilter }) => {
  const inputHandle = useCallback(
    (e) => setFilter((prev) => ({ ...prev, query: e.target.value })),
    [setFilter]
  );
  const selectHandle = useCallback(
    (newValue) => setFilter((prev) => ({ ...prev, sort: newValue })),
    [setFilter]
  );

  return (
    <StyledFilterForm onSubmit={(e) => e.preventDefault()}>
      <Input
        value={filter.query}
        onChange={inputHandle}
        placeholder='Search...'
      />

      <Select
        options={options}
        defaultTitle='Sorting by'
        value={filter.sort}
        setValue={selectHandle}
      />
    </StyledFilterForm>
  );
};

export default memo(FilterForm);
