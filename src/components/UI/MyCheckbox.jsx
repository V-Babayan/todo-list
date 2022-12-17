import React from "react";
import styled from "styled-components";

const StyledMyChackbox = styled.div`
  position: relative;
  height: 20px;
  flex: 0 0 20px;

  border: 2px solid #000000;
  border-radius: 5px;

  cursor: pointer;
  transition: background 0.2s linear;

  &:hover {
    background: #c4c4c4;
  }
`;

const Icon = styled.svg`
  position: absolute;
  bottom: 3px;
  left: 2px;
  width: 130%;
  fill: #1fde78;
  stroke-width: 5;
  stroke: #000000;
`;

const MyChackbox = ({ isActive, ...props }) => {
  return (
    <StyledMyChackbox {...props}>
      {!isActive && (
        <Icon viewBox="180 70 128 99">
          <path d="M 185.333 118 L 180 130.667 L 216.333 169 L 308 76 L 302.333 70 L 216.333 143.333 L 185.333 118 Z" />
        </Icon>
      )}
    </StyledMyChackbox>
  );
};

export default MyChackbox;
