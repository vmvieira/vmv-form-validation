import styled, { createGlobalStyle, css } from "styled-components";
import { IStyleProps } from "../interfaces";

export const GlobalStyle = createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    }

  body {
    background-color:#010409
  }
`;

export const MainWrapper = styled.main`
  padding: 1rem;
  min-height: 100vh;
  display: grid;
  place-items: center;

  @media (min-width: 700px) {
    padding: 3rem;
    grid-auto-flow: column;
  }
`;

export const BasicWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

export const MainForm = styled.form`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  min-height: 500px;
  background-color: #0e1118;
  border: 2px solid #30363d;
  border-radius: 6px;

  @media (min-width: 700px) {
    padding: 2rem;
    min-height: 600px;
  }
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FancyHeadline = styled.span<IStyleProps>`
  color: transparent;
  background-image: linear-gradient(to right, #4ade80, #60a5fa);
  background-clip: text;
  -webkit-background-clip: text;

  font-size: 2rem;
  font-weight: 600;

  @media (min-width: 700px) {
    font-size: 2.5rem;
  }

  ${({ isSuccess }) =>
    isSuccess &&
    css`
      background-image: linear-gradient(to right, #bef264, #22c55e);
    `}

  ${({ isError }) =>
    isError &&
    css`
      background-image: linear-gradient(to right, #dc2626, #fca5a5);
    `}
`;

export const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  margin: 2rem auto;
  background-color: #60a5fa;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`;
