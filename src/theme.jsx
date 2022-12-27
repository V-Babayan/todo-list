import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  q::after,
  q::before {
    content: '';
  }
  body,
  html {
    font-family: 'Rubik', sans-serif;
    background: #f5f5f5;
    width: 100%;
    height: 100vh
  }

  #root {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
  }
`;

const theme = {
  priorityColors: {
    high: "#de1f26",
    medium: "#de771f",
    low: "#27de1f",
  },
  primary: {
    violet: "#1f27de",
    green: "#27de1f",
  },
};

export default theme;
