import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`


*{

  box-sizing: border-box;
  -webkit-appearance:none;
    
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
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 63, 0.342);
    border-radius: 5px;
  }

  @media (max-width:900px) {
    scrollbar-width: none;
    ::-webkit-scrollbar {
    width: 0px;
  }

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




`;

export default GlobalStyles;
