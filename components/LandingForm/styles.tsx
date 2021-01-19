import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  z-index: 10;
  padding: 1rem;
  /* margin-right: 45px; */
  /* margin-top: 200px; */
  width: 320px;
  margin-bottom: 20px;
  margin-top: 20px;

  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 4px 4px 20px #cbced1;
  background-color: white;

  label {
    margin-bottom: 3px;
    font-weight: 600;
    color: black;
    overflow: hidden;
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
    color: black;
    font-size: 1rem;
    background-color: transparent;
    overflow: hidden;
  }
`;

export const FormTitle = styled.h1`
  color: black;
  font-size: 1.2rem;
  text-align: justify;
  margin-bottom: 1rem;
`;
