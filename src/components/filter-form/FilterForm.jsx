import React from "react";

import Input from "../core-ui/input/Input";
import Select from "../core-ui/select/Select";
import Button from "../core-ui/button/Button";
import { StyledButtonContainer } from "./FilterForm.styled";

const FilterForm = ({ filter, setFilter, create }) => {
  return (
    <form>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Search..."}
      />
      <StyledButtonContainer>
        <Button
          onClick={(e) => {
            e.preventDefault();
            create();
          }}>
          Create Todo
        </Button>
        <Select
          options={[
            { value: "title", name: "Title" },
            { value: "description", name: "Description" },
            { value: "created", name: "Created date" },
            { value: "expected", name: "Expected date" },
          ]}
          defaultTitle={"Sorting by"}
          value={filter.sort}
          setValue={(newSorting) => setFilter({ ...filter, sort: newSorting })}
        />
      </StyledButtonContainer>
    </form>
  );
};

export default FilterForm;
