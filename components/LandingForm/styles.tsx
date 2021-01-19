import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  z-index: 10;
  padding: 1rem;
  margin-right: 45px;
  width: 245px;
  /* min-width: 270px; */
  min-height: 270px;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 4px 4px 20px #cbced1;
  background-color: #ececec;

  label {
    margin-bottom: 3px;
    font-weight: 600;
    color: var(--darkerPrimary-color);
  }

  button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
  }

  .error {
    margin-top: 2px;
    align-self: flex-end;
    color: var(--darkerPrimary-color);
    font-size: 0.6rem;
  }
`;

export const FormTitle = styled.h1`
  color: var(--darkerPrimary-color);
  font-size: 1.5rem;
  text-align: justify;
  margin-bottom: 0.5rem;
`;
