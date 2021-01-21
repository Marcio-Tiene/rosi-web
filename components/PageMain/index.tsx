import styled from 'styled-components';

const PageMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  scrollbar-width: thin;
  scrollbar-color: var(--Ink) transparent;
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
    background: var(--Ink);
    border-radius: 5px;
  }
`;

export default PageMain;
