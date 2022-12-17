import React from "react";
import styled from "styled-components";

const StyledMyInput = styled.input`
  padding: 7px 15px;
  width: 100%;

  border: 4px solid ${({ theme }) => theme.primary.green};
  border-radius: 10px;
  font-size: 1.4em;
`;

const MyInput = (props) => {
  return <StyledMyInput {...props} />;
};

export default MyInput;
