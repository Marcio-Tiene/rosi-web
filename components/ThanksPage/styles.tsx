import styled from 'styled-components';

export const ThanksArticle = styled.article`
  color: white;
  display: flex;
  background-image: url('/thanks-page-bg.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom;
  background-size: cover;

  padding: 3vh 3vw;

  flex-direction: column;
  width: 90vw;
  max-width: 95vw;
  height: 80vh;
  max-height: 95vh;
  justify-content: space-between;
  align-items: center;

  border-radius: 2rem;

  box-shadow: 4px 4px 20px #cbced1;
  transition: linear 0.2s;

  .go-back-button {
    align-self: flex-end;
  }
`;

export const ThanksCardTitle = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
`;
