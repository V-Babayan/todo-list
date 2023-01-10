import React, { useCallback, useMemo, memo } from "react";

import Input from "../core-ui/input/Input";
import Select from "../core-ui/select/Select";
import { StyledFilterForm } from "./FilterForm.styled";

const FilterForm = ({ filter, setFilter }) => {
  const inputHandle = useCallback(
    (e) => setFilter((prev) => ({ ...prev, query: e.target.value })),
    []
  );
  const selectHandle = useCallback(
    (newValue) => setFilter((prev) => ({ ...prev, sort: newValue })),
    []
  );

  const options = useMemo(
    () => [
      { value: "title", name: "Title" },
      { value: "description", name: "Description" },
      { value: "created", name: "Created date" },
      { value: "expected", name: "Expected date" },
      { value: "priority", name: "Priority" },
    ],
    []
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
