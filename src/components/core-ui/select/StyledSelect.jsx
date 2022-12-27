import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 5px 10px;

  border: 4px solid ${({ theme }) => theme.primary.green};
  border-radius: 5px;
`;
