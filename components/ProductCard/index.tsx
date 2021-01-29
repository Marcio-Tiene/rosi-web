/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
import React from 'react';
import PossibleLink from './PossibleLink';

interface IProductCard {
  onCardClick?: () => void;
  linkTo?: string;
  cardTitle: string;
  cardDescription: string;
  cardImg: string;
}

const PorductCard: React.FC<IProductCard> = ({
  linkTo,
  cardDescription,
  cardImg,
  cardTitle,
  onCardClick,
}) => {
  return (
    <>
      <PossibleLink linkTo={linkTo}>
        
        <article onClick={() => {if(onCardClick) onCardClick() }}>
          <h1>{cardTitle}</h1>
          <div>
            <img src={cardImg} alt={`${cardTitle} Imagem de divulgação `} />
            <p>{cardDescription}</p>
          </div>
        </article>
      </PossibleLink>
    </>
  );
};

export default PorductCard;
