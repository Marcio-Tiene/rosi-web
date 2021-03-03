import styled from 'styled-components';
import Button from '../Button';

export const SectionRosiHistory = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100vw;
  background-color: #040205;
  padding-top: 50px;
`;
export const WhoIAmTitle = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 3rem;
  max-width: 90vw;
`;

export const WhoIAmContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap-reverse;
`;
export const WhoIAmArticleButton = styled(Button)`
  margin: 50px 0;
`;

export const WhoIAmImg = styled.img`
  margin-right: 20px;
  width: 30vw;
  min-width: 300px;
`;

export const WhoIAmArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: space-evenly;
`;
export const WhoIAmPatagraph = styled.p`
  line-height: 2.1rem;
  font-size: 1.5rem;
  color: #fff;

  text-align: left;
  width: 400px;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;
