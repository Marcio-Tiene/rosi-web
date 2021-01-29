import styled, { css } from 'styled-components';

interface INotificationBox {
  isOpen?: boolean;
}

export const NotificatioBox = styled.dialog`
  z-index: 1000;
  margin: 0;
  width: fit-content;
  max-width: 95vw;

  position: fixed;
  border: none;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(-150px);
  background: #12db89 0% 0% no-repeat padding-box;
  -webkit-box-shadow: 0px 20px 25px #0000001a;
  -moz-box-shadow: 0px 20px 25px #0000001a;
  box-shadow: 0px 20px 25px #0000001a;
  border-radius: 2rem;

  display: flex;

  align-items: center;
  padding: 1rem 2rem;

  &.failure {
    background: #ff2d2d 0% 0% no-repeat padding-box;
  }
  p {
    flex: 1;
    color: #fff;
  }
  transition: transform 0.7s;

  ${(p: INotificationBox) =>
    p.isOpen &&
    css`
      transform: translateX(-50%) translateY(0px);
    `}
`;

export const CloseSpan = styled.span`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  cursor: pointer;
`;
