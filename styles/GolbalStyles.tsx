import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`


*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 63, 0.342) transparent;
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
    background: rgba(0, 0, 63, 0.342);
    border-radius: 5px;
  }
  }

html {
  
  
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


`;

export default GlobalStyles;
