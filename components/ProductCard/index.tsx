/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PossibleLink from './PossibleLink';
import ProductArticle, { ProductButtonsContainer } from './styles';

interface IProductCard {
  onCardClick?: () => void;

  cardTitle: string;
  cardDescription: JSX.Element;
  cardImg: string;
  // productTags: string[];
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
}) => {
  return (
    <ProductArticle
      onClick={() => {
        if (onCardClick) onCardClick();
      }}
    >
      <ProductArticle.Title>{cardTitle}</ProductArticle.Title>
      {/* <ProductArticle.TagWrapper>
        {productTags.map((tag, index) => (
          <ProductArticle.Tag key={`${tag}_${index + 100}_${Math.random() * 100}`}>
            {tag}
          </ProductArticle.Tag>
        ))}
      </ProductArticle.TagWrapper> */}
      <ProductArticle.ContentWraper>
        <ProductArticle.ContentImg src={cardImg} alt={`${cardTitle} Imagem de divulgação `} />
        <ProductArticle.ContentParagraph>{cardDescription}</ProductArticle.ContentParagraph>
      </ProductArticle.ContentWraper>
      <ProductButtonsContainer>
        {ProductButtons.map((productButton, index) => (
          <>
            <PossibleLink
              linkKey={`${productButton.buttonText}_${(index + 100) * 237}_${Math.random() * 100}`}
              key={`${productButton.buttonText}_${index + 100}_${Math.random() * 100}`}
              linkTo={productButton.linkTo}
            >
              <ProductArticle.Button
                key={`${index + 100}_${productButton.buttonText}_${Math.random() * 100} `}
              >
                {productButton.buttonText}
              </ProductArticle.Button>
            </PossibleLink>
          </>
        ))}
      </ProductButtonsContainer>
    </ProductArticle>
  );
};

export default PorductCard;
