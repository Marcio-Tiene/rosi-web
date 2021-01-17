import styled from 'styled-components';

const Button = styled.button`
  width: fit-content;
  margin-top: 20px;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: teal;
  box-shadow: 0px 4px 10px #626466;
  border: none;
  outline: none;
  transition: linear 0.2s;
  &:hover {
    background-color: #016868;
  }
  &:active {
    background-color: #016868;
    box-shadow: 0px 0px 0px #626466;
  }
`;

export default Button;
