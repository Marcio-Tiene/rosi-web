import styled, { css } from 'styled-components';

interface IModal {
  show?: boolean;
}

export const ModalBackground = styled.dialog`
  display: none;

  opacity: 0;

  place-items: center;

  min-width: 100vw;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  top: 0;
  left: 0;

  .animate {
    -webkit-animation: animatezoom 0.2s;
    animation: animatezoom 0.2s;
  }
  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  ${(p: IModal) =>
    p.show &&
    css`
      display: grid;
      opacity: 1;
    `};
`;
