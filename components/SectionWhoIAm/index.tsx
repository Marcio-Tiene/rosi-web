import React from 'react';
import Button from '../Button';
import {
  SectionRosiHistory,
  WhoIAmArticle,
  WhoIAmContentWrapper,
  WhoIAmImg,
  WhoIAmPatagraph,
  WhoIAmTitle,
} from './styles';

const SectionWhoIAm: React.FC = () => {
  return (
    <SectionRosiHistory>
      <WhoIAmTitle>Quem é Rosi?</WhoIAmTitle>
      <WhoIAmContentWrapper>
        <WhoIAmImg src="/rosi-picture.webp" alt="Foto da Rosi" />
        <WhoIAmArticle>
          <WhoIAmPatagraph>
            Rosi Job é apaixonada por pessoas. É conhecida por sua carreira meteórica e seus
            resultados expressivos com equipes. Sua especialidade é liderança com foco em gestão de
            pessoas, pois ela acredita que os resultados são 100% gerados por elas.
          </WhoIAmPatagraph>
          <a href="#quero-participar">
            <Button>Quero me cadastrar!</Button>
          </a>
        </WhoIAmArticle>
      </WhoIAmContentWrapper>
    </SectionRosiHistory>
  );
};

export default SectionWhoIAm;
