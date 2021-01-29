/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
import React from 'react';
import PossibleLink from './PossibleLink';
import ProductArticle from './styles';

interface IProductCard {
  onCardClick?: () => void;
  linkTo?: string;
  cardTitle: string;
  cardDescription: string;
  cardImg: string;
  productTags:string[];
}

const PorductCard: React.FC<IProductCard> = ({
  linkTo,
  cardDescription,
  cardImg,
  cardTitle,
  onCardClick,
  productTags
}) => {
  return (
    <>
      <PossibleLink linkTo={linkTo}>
        
        <ProductArticle onClick={() => {if(onCardClick) onCardClick() }}>
          <ProductArticle.Title>
            {cardTitle}
            </ProductArticle.Title>
          <ProductArticle.TagWrapper>
            {productTags.map((tag, index) => <ProductArticle.Tag key={`${tag}_${index}`}>{tag}</ProductArticle.Tag>)}
          </ProductArticle.TagWrapper>
          <ProductArticle.ContentWraper>
            <ProductArticle.ContentImg src={cardImg} alt={`${cardTitle} Imagem de divulgação `} />
            <ProductArticle.ContentParagraph>
              {cardDescription}
              </ProductArticle.ContentParagraph>
          </ProductArticle.ContentWraper>
        </ProductArticle>
      </PossibleLink>
    </>
  );
};

export default PorductCard;
