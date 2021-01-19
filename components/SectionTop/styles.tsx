import styled from 'styled-components';

interface ISectionTop {
  bgImg: string;
}

export const SectionTop = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  /* min-height: 100vh; */
  min-height: 100vh;

  /* padding: 0 2.5vw; */
  overflow: hidden;

  background-color: #03060e;
  background-image: url(${(p: ISectionTop) => p.bgImg});

  background-repeat: no-repeat;
  background-size: cover;
`;

export const CurveSvg = styled.svg`
  position: absolute;

  bottom: -1px;
  left: 0;
  display: block;
  width: 100vw;
  overflow-x: hidden;
`;
export const SectionTopImg = styled.img`
  width: 360px;
  max-width: 90vw;

  height: 90px;

  @media (max-width: 1067px) {
    position: absolute;
    top: 10px;
    width: 95vw;
    height: 23.75vw;
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
    gap: 20px;
  }
`;

export const AtributeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2vh;
  li {
    display: flex;
    justify-content: center;
    line-height: 3rem;
    align-self: flex-start;
    font-weight: 600;
    font-size: 2rem;
    color: white;
    list-style: none;
    /* text-shadow: 0 0 12px #ffffff; */
    gap: 2rem;
  }
`;

export const MainRosiImg = styled.img`
  margin-top: 100px;
  align-self: flex-end;
  width: 30vw;
  min-width: 300px;

  max-width: 95vw;
  @media (max-width: 1067px) {
    margin-top: calc(23.75vw + 10px);
    width: 95vw;
  }
  @media (max-width: 900px) {
    /* display: none; */
  }
`;
