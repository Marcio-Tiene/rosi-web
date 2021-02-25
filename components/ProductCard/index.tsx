/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PossibleLink from './PossibleLink';
import ProductArticle from './styles';

interface IProductCard {
  onCardClick?: () => void;

  cardTitle: string;
  cardDescription: string;
  cardImg: string;
  productTags: string[];
  ProductButtons: IProductButtons[];
}

interface IProductButtons {
  linkTo?: string;
  buttonText: string;
}

const PorductCard: React.FC<IProductCard> = ({
  ProductButtons,
  cardDescription,
  cardImg,
  cardTitle,
  onCardClick,
  productTags,
}) => {
  return (
    <ProductArticle
      onClick={() => {
        if (onCardClick) onCardClick();
      }}
    >
      <ProductArticle.Title>{cardTitle}</ProductArticle.Title>
      <ProductArticle.TagWrapper>
        {productTags.map((tag, index) => (
          <ProductArticle.Tag key={`${tag}_${index}`}>{tag}</ProductArticle.Tag>
        ))}
      </ProductArticle.TagWrapper>
      <ProductArticle.ContentWraper>
        <ProductArticle.ContentImg src={cardImg} alt={`${cardTitle} Imagem de divulgação `} />
        <ProductArticle.ContentParagraph>{cardDescription}</ProductArticle.ContentParagraph>
      </ProductArticle.ContentWraper>
      <div style={{ alignSelf: 'flex-end' }}>
        {ProductButtons.map((productButton, index) => (
          <>
            <PossibleLink linkTo={productButton.linkTo}>
              <ProductArticle.Button key={index + productButton.buttonText}>
                {productButton.buttonText}
              </ProductArticle.Button>
            </PossibleLink>
          </>
        ))}
      </div>
    </ProductArticle>
  );
};

export default PorductCard;
