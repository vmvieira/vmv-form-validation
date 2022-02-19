import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  height: 3rem;
  text-align: center;
  border: none;
  background-color: #60a5fa;
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #4ade80;
    transition: all 0.5s ease 0s;
  }

  &:disabled {
    background-color: #9ca3af;
    transition: all 0.5s ease 0s;
    cursor: auto;
  }
`;
