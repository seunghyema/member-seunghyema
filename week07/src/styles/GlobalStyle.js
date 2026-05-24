import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: ${({ theme }) => theme.background};
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
