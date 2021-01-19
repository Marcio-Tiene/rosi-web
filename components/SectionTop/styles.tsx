import styled from 'styled-components';

interface ISectionTop {
  bgImg: string;
}

export const SectionTop = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 2.5vw;
  padding-bottom: 4vw;
  padding-right: 15vw;

  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  background-color: #081024;
  background-image: url(${(p: ISectionTop) => p.bgImg});

  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: top 0px left -100px; */
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

  height: 90px;
`;

export const TopSectionContentContainer = styled.div`
  height: 100%;
  max-width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AtributeList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  li {
    display: flex;
    justify-content: center;
    line-height: 3rem;
    align-self: center;
    font-weight: 600;
    font-size: 2rem;
    color: var(--primary-color);
    list-style: none;
    text-shadow: 0 0 12px #ffffff;
    gap: 2rem;
  }
`;
