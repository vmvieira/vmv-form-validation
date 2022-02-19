import styled from "styled-components";
import { IStyleProps } from "../../interfaces";

export const InputContainer = styled.div`
  min-height: 100px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: 700px) {
    padding: 0.75rem 1.25rem;
  }
`;

export const LabelText = styled.label`
  color: white;
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 700px) {
    font-size: 1.25rem;
  }
`;

export const FieldMessage = styled.p<IStyleProps>`
  font-size: 1rem;
  color: ${({ fontColor }) => fontColor || "white"};
`;
