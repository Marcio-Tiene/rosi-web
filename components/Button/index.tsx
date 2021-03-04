import styled from 'styled-components';

interface IButton {
  bgColor?: string;
  interactionColor?: string;
}

const Button = styled.button`
  width: fit-content;
  min-width: 160px;

  border-radius: 2px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #040205;
  background-color: rgb(255, 160, 97);
  -webkit-box-shadow: 4px 4px 8px #626466;
  -moz-box-shadow: 4px 4px 8px #626466;
  box-shadow: 4px 4px 8px #626466;
  border: none;
  outline: none;
  margin-bottom: 10px;
  transition: linear 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ff8d41;
  }
  &:active {
    background-color: #ff8d41;
    -webkit-box-shadow: 0px 0px 0px #626466;
    -moz-box-shadow: 0px 0px 0px #626466;
    box-shadow: 0px 0px 0px #626466;
  }

  &.social-media-card {
    color: #fff;
    background-color: ${(p: IButton) => (p.bgColor ? p.bgColor : '#ffa061')};
    &:hover {
      background-color: ${(p: IButton) => (p.interactionColor ? p.interactionColor : '#ff8d41')};
    }
    &:active {
      background-color: ${(p: IButton) => (p.interactionColor ? p.interactionColor : '#ff8d41')};
    }
  }
`;

export default Button;
