import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const SectionTwo = styled.section`
  min-height: 100vh;
  height: fit-content;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 50px 2.5vw;
  gap: 50px;
`;

export const MyPathWayTitle = styled.h1`
  font-size: 3.7rem;
`;

export const AchivementsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
  width: 80vw;
  li {
    text-align: justify;
    font-weight: 500;
    font-size: 2.5rem;
  }
`;

export const CheckIcon = styled(FaCheck)`
  margin-right: 2rem;
`;
