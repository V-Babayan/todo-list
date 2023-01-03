import React from "react";

import Input from "../core-ui/input/Input";
import Select from "../core-ui/select/Select";
import { StyledFilterForm } from "./FilterForm.styled";

const FilterForm = ({ filter, setFilter }) => {
  return (
    <StyledFilterForm>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Search..."}
      />
      <Select
        options={[
          { value: "title", name: "Title" },
          { value: "description", name: "Description" },
          { value: "created", name: "Created date" },
          { value: "expected", name: "Expected date" },
          { value: "priority", name: "Priority" },
        ]}
        defaultTitle={"Sorting by"}
        value={filter.sort}
        setValue={(newSorting) => setFilter({ ...filter, sort: newSorting })}
      />
    </StyledFilterForm>
  );
};

export default FilterForm;
