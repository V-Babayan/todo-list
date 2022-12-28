import styled from "styled-components";

export const StyledSvg = styled.svg`
  stroke: #000000;
  stroke-width: 1.5;
  stroke-miterlimit: 10;

  height: 48px;

  fill: #000000;
`;

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
  color: ${({ theme }) => theme.primary.green};

  text-transform: capitalize;
`;
