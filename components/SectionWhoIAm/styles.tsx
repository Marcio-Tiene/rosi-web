import styled from 'styled-components';

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
  color: white;
  margin-bottom: 2rem;
  font-size: 3rem;
`;

export const WhoIAmContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap-reverse;
`;

export const WhoIAmImg = styled.img`
  width: 30vw;
  min-width: 300px;
`;

export const WhoIAmArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;
export const WhoIAmPatagraph = styled.p`
  line-height: 2rem;
  font-size: 1.5rem;
  color: white;
  width: 30vw;
  min-width: 300px;
`;
