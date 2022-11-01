import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ef233c;
    --primary-darker: #d80032;

    --light: #edf2f4;
    --light-shade: #cfdce2;

    --dark: #2b2d42;
    --dark-tint: #3b3e5a;
    --dark-lighter: #8d99ae;
  }

  body {
    background-color: var(--light);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Space Grotesk", "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: "JetBrains Mono", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New", monospace;
  }
 `;

export default GlobalStyle;
