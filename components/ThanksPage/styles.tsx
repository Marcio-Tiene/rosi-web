import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export const ThanksArticle = styled.article`
  position: relative;
  color: #fff;

  padding: 20px;

  display: flex;
  background-image: url('/thanks-page-bg.png');
  background-repeat: no-repeat;

  background-position: center bottom;
  background-size: cover;

  flex-direction: column;
  width: 90vw;

  min-height: 80vh;
  height: fit-content;

  justify-content: space-between;
  align-items: center;

  border-radius: 2rem;

  -webkit-box-shadow: 4px 4px 20px #cbced1;
  -moz-box-shadow: 4px 4px 20px #cbced1;
  box-shadow: 4px 4px 20px #cbced1;
  transition: linear 0.2s;
  overflow: hidden;

  .go-back-button {
    align-self: flex-end;
  }
`;

export const ThanksCardTitle = styled.h1`
  font-size: 3rem;
  line-height: fit-content;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const ThanksParagraph = styled.p`
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 15px;
  right: 15px;
  transition: linear;
  cursor: pointer;
  :hover {
    color: #c2c2c2;
  }
  :active {
    color: #c2c2c2;
  }
`;
