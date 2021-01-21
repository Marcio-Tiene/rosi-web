import styled, { css } from 'styled-components';
interface IInput {
  inputError: boolean;
}

export const FormField = styled.fieldset`
  margin: 0;
  padding: 0;
  padding-left: 3px;
  padding-right: 3px;
  height: 80px;

  display: flex;
  flex-direction: column;
  border: none;
  input {
    color: black;
    box-shadow: inset 4px 4px 4px #cbced1, inset 4px 4px 4px white;
    text-indent: 1ch;
    border-radius: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border: none;
    width: 100%;
    transition: linear box-shadow 0.2s;
    overflow: hidden;
    &:focus {
      outline: none;
      box-shadow: inset 4px 4px 4px #cbced1, inset 4px 4px 4px white, 0 0 0 1px green;
      background-color: transparent;
    }
    ${(p: IInput) =>
      p.inputError &&
      css`
        box-shadow: inset 4px 4px 4px #cbced1, inset 4px 4px 4px red, 0 0 0 1px red;
        background-color: rgba(255, 0, 0, 0.185);
        overflow: hidden;
      `}
  }
`;
