import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; 
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    background-color: #f7f9f6; 
    color: #1a2e1a;
    line-height: 1.6;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
    transition: all 0.2s ease-in-out;
    border-radius: 12px; 
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;
  }

  :root {
    --clover-accent: #2e7d32;   
    --clover-light: #e8f5e9;    
    --clover-mint: #a5d6a7;     
    --clover-dark: #1b5e20;     
  }

  ::selection {
    background-color: var(--clover-mint);
    color: #1b5e20;
  }
`;

export default GlobalStyle;