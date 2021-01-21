import styled from 'styled-components';

export const ThanksArticle = styled.article`
  color: white;

  padding: 20px;

  display: flex;
  background-image: url('/thanks-page-bg.png');
  background-repeat: no-repeat;

  background-position: center bottom;
  background-size: cover;

  flex-direction: column;
  width: 90vw;

  min-height: 80vh;
  height: fit-content;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  border-radius: 2rem;

  box-shadow: 4px 4px 20px #cbced1;
  transition: linear 0.2s;
  overflow: hidden;

  .go-back-button {
    align-self: flex-end;
  }
`;

export const ThanksCardTitle = styled.h1`
  font-size: 3rem;
  line-height: fit-content;
  overflow: hidden;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const ThanksParagraph = styled.p`
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
`;
