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
  height: fit-content;
  min-height: 100vh;

  background-color: #081024;
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
`;
export const SectionTopImg = styled.img`
  width: 35vw;
  height: 8vw;
  align-self: flex-end;
`;
