import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const StyledTitle = styled.h2`
  flex: 1 1 auto;
  font-size: 1.8em;
  color: #39739d;
  text-transform: capitalize;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #e4e6eb;
  height: 40px;
  width: 40px;

  border-radius: 50%;

  & > svg {
    height: 20px;
  }
`;
