import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  max-width: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
  }

  .error {
    align-self: flex-end;
    color: red;
    font-size: 10px;
  }
`;
