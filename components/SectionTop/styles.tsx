import styled from 'styled-components';

export const SectionTop = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;

  width: 100vw;
  /* min-height: 100vh; */
  min-height: 100vh;

  /* padding: 0 2.5vw; */
  overflow: hidden;

  background-color: #040205;

  background-repeat: no-repeat;
  background-size: cover;
`;

export const CurveSvg = styled.svg`
  z-index: 2;
  position: absolute;

  bottom: -1px;
  left: 0;
  display: block;
  width: 100vw;
  overflow-x: hidden;
`;
export const SectionTopImg = styled.picture`
  z-index: 2;

  @media (max-width: 1067px) {
    position: absolute;
    top: 10px;
  }

  img {
    width: 300px;
    max-width: 90vw;

    height: 75px;

    @media (max-width: 1067px) {
      width: 300px;
      height: 75px;
    }
  }
`;

export const TopSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 95%; */
  min-height: 80vh;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 1067px) {
    margin-top: 20px;
    min-height: fit-content;
    width: 90vw;
  }
`;

export const AtributeList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  li {
    margin: 0.5vh 0;
    display: flex;
    justify-content: center;
    line-height: 3rem;
    align-self: flex-start;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    list-style: none;
    max-width: 800px;

    width: 100%;

    @media (max-width: 1067px) {
      font-size: 1.2rem;
      line-height: 1.75rem;
      /* text-align: left;
      padding-left: 5vw; */
    }
  }
`;

export const MainRosiImg = styled.picture`
  display: flex;
  align-items: flex-end;
  align-self: flex-end;

  img {
    z-index: 2;
    /* filter: saturate(0); */
    opacity: 0.9;

    width: 30vw;
    min-width: 300px;
    margin-top: 100px;

    max-width: 95vw;
    @media (max-width: 1067px) {
      margin-top: calc(23.75vw + 10px);
      width: 95vw;
    }
  }
`;
