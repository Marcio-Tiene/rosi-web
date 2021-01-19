import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`


*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  scrollbar-color: var(--primary-color) transparent;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
  }
  }

html {
  
  --primary-color:#ff8d41;
  --darkerPrimary-color:#ff6e07;
  }  

body {

  height:100vh;
  width:100vw;
  
  background-color:#F0F0F0;
  font-family: Cambria, sans-serif;


}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6{
  color: var(--darkerPrimary-color)

}
`;

export default GlobalStyles;
