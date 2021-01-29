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
  ContentParagraph?: String & StyledComponentBase<'p', any, {}, never>;
  Button?: String & StyledComponentBase<'button', any, {}, never>;
}

const ProductArticle: IProductArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem;

  gap: 1rem;

  transition: linear 0.3s;
  &:hover {
    background-color: rgba(255, 141, 65, 0.109);
  }
`;

ProductArticle.Title = styled.h1`
  font-size: 2rem;
  @media (max-width: 900px) {
    width: 90vw;
    padding-left: 1rem;
  }
`;

ProductArticle.TagWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* @media (max-width: 900px) {
    justify-content: center;
  } */
`;

ProductArticle.Tag = styled.span`
  background-color: #b6bac0;
  padding: 0.5ch 1ch;
  border-radius: 1ch;
`;

ProductArticle.ContentWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 900px) {
    justify-content: center;
    max-width: 90vw;
  }
`;

ProductArticle.ContentImg = styled.img`
  width: 200px;
  border-radius: 1rem;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;

ProductArticle.ContentParagraph = styled.p`
  width: calc(60vw - 200px);
  min-width: 250px;

  @media (max-width: 900px) {
    width: 90vw;
  }
`;

ProductArticle.Button = styled(Button)`
  align-self: flex-end;
  z-index: 10;
`;

export default ProductArticle;
