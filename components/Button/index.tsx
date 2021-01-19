import styled from 'styled-components';

const Button = styled.button`
  width: fit-content;

  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: green;
  box-shadow: 0px 4px 10px #626466;
  border: none;
  outline: none;
  margin-bottom: 10px;
  transition: linear 0.2s;
  &:hover {
    background-color: #028b02;
  }
  &:active {
    background-color: #028b02;
    box-shadow: 0px 0px 0px #626466;
  }
`;

export default Button;
