import React from "react";

import Button from "./core-ui/button/Button";

const FormButton = ({ func, children }) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        func();
      }}>
      {children}
    </Button>
  );
};

export default FormButton;
