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
`;


const theme = {}

export default theme;
