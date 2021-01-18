import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  padding: 1rem;
  width: 20vw;
  min-width: 270px;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 4px 4px 20px #cbced1;
  align-self: flex-end;
  justify-self: center;
  background-color: #ececec;

  label {
    margin-bottom: 3px;
    font-weight: 600;
    color: var(--darkerPrimary-color);
  }

  button {
    margin-top: 5px;
    align-self: flex-end;
    width: 100%;
  }

  .error {
    margin-top: 2px;
    align-self: flex-end;
    color: #ff8d41;
    font-size: 0.6rem;
  }
`;
