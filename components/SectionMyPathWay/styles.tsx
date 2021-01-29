import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const SectionTwo = styled.section`
  position: relative;
  height: fit-content;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 50px 2.5vw;
  padding-bottom: 150px;
  gap: 50px;
  overflow-y: hidden;
`;

export const MyPathWayTitle = styled.h1`
  font-size: 3.7rem;
  max-width: 90vw;
  color: black;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const AchivementsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
  width: 80vw;
  li {
    text-align: left;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const CheckIcon = styled(FaCheck)`
  margin-right: 2rem;
`;

export const SectioTwoContainerCurve = styled.svg`
  position: absolute;

  bottom: -1px;
  left: 0;
  display: block;
  width: 100vw;
  overflow-x: hidden;
`;
