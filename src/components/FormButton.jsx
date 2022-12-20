import React from "react";

import Button from "./core-ui/button/Button";

const FormButton = ({ func, children, item }) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        func(item);
      }}>
      {children}
    </Button>
  );
};

export default FormButton;
