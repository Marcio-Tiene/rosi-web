import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  z-index: 10;
  padding: 1rem;
  /* margin-right: 45px; */
  /* margin-top: 200px; */
  width: 330px;
  max-width: 80vw;
  margin-bottom: 30px;
  margin-top: 20px;

  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  -webkit-box-shadow: 4px 4px 8px #cbced1;
  -moz-box-shadow: 4px 4px 8px #cbced1;
  box-shadow: 4px 4px 8px #cbced1;
  background-color: #fff;

  label {
    margin-bottom: 3px;
    font-weight: 600;
    color: #000;
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
    color: #ff0000;
    font-size: 1rem;
    background-color: transparent;
    overflow: hidden;
  }
`;

export const FormTitle = styled.h1`
  color: #000;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;
