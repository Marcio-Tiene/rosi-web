import styled from 'styled-components';

interface ISectionTop {
  bgImg: string;
}

export const SectionTop = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5vw;
  padding-right: 20vw;

  width: 100vw;
  height: 100vh;

  background-color: #081024;
  background-image: url(${(p: ISectionTop) => p.bgImg});

  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionTopImg = styled.img`
  width: 400px;
  height: 102px;
  align-self: flex-end;
`;
