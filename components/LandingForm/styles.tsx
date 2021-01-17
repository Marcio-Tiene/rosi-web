import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  padding: 1rem;
  width: 20vw;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 11px 11px 17px #cbced1, -11px -11px 17px white;

  label {
    margin-bottom: 5px;
    font-weight: 500;
    color: teal;
  }

  button {
    align-self: flex-end;
  }

  .error {
    align-self: flex-end;
    color: red;
    font-size: 10px;
  }
`;
