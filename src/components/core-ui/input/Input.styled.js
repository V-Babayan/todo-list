import styled from "styled-components";

const StyledInput = styled.input`
  padding: 7px 15px;
  width: 100%;

  border: 4px solid ${({ theme }) => theme.primary.green};
  border-radius: 10px;
  font-size: 1.4em;
`;

export default StyledInput;
