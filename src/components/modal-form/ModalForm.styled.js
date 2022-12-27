import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFieldset = styled.fieldset`
  border: 3px solid ${({ theme }) => theme.primary.green};
  border-radius: 5px;
  padding: 10px;
`;
export const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.primary.green};
`;

export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledButtonsContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
`;

export const StyledDatesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
