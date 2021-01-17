import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  background-color:#F0F0F0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1 {
  color: red

}
`;

export default GlobalStyles;
