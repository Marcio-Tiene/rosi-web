/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { StyledComponentBase, ThemedStyledFunction } from 'styled-components';
import Button from '../Button';

interface IProductArticle extends StyledComponentBase<any, {}> {
  Title?: String & StyledComponentBase<'h1', any, {}, never>;
  TagWrapper?: String & StyledComponentBase<'div', any, {}, never>;
  Tag?: String & StyledComponentBase<'span', any, {}, never>;
  ContentWraper?: String & StyledComponentBase<'div', any, {}, never>;
  ContentImg?: String & StyledComponentBase<'img', any, {}, never>;
  ContentParagraph?: String & StyledComponentBase<'div', any, {}, never>;
  Button?: String & StyledComponentBase<'button', any, {}, never>;
}

const ProductArticle: IProductArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;

  max-width: 90vw;
  margin: 25px 0;

  transition: linear 0.3s;
  &:hover {
    background-color: rgba(255, 141, 65, 0.109);
  }
`;

ProductArticle.Title = styled.h1`
  margin: 0.5rem;
  font-size: 2rem;
  @media (max-width: 900px) {
    font-size: 1.5rem;
    width: calc(90vw - 1rem);
  }
`;

ProductArticle.TagWrapper = styled.div`
  align-self: center;
  margin: 0.5rem;

  display: flex;
  flex-wrap: wrap;

  /* @media (max-width: 900px) {
    justify-content: center;
  } */
`;

ProductArticle.Tag = styled.span`
  margin: 0.5rem 0;
  margin-right: 1rem;
  background-color: #b6bac0;
  padding: 0.5ch 1ch;
  border-radius: 1ch;
`;

ProductArticle.ContentWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
    max-width: 90vw;
  }
`;

ProductArticle.ContentImg = styled.img`
  margin: 0.5rem;
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  @media (max-width: 900px) {
    height: calc(90vw - 1rem);
    width: calc(90vw - 1rem);
  }
`;

ProductArticle.ContentParagraph = styled.div`
  margin: 0.5rem;
  width: 615px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

ProductArticle.Button = styled(Button)`
  margin: 1rem 0.5rem;
  align-self: flex-end;
  z-index: 10;
`;

export const ProductButtonsContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-self: flex-end;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ProductLink = styled.a``;

export default ProductArticle;
