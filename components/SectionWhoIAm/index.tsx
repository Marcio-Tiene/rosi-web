import React from 'react';
import {
  SectionRosiHistory,
  WhoIAmArticle,
  WhoIAmArticleButton,
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
            Mentora de carreira, especialista em liderança e gestão de pessoas,&nbsp; Rosi Job é
            conhecida por sua carreira meteórica e seus resultados expressivos com equipes. <br />
            Sua especialidade é liderança com foco em gestão de pessoas, pois ela acredita que os
            resultados são 100% gerados por elas. Pós graduada em gestão de pessoas, formada em
            administração e coaching.
            <br />
            Com experiência de mais de 18 anos no ambiente corporativo, sendo 12 em uma
            multinacional. Premiada como uma das 5 melhores gerentes do Brasil, foi contratada com
            vendedora e em menos de dois anos já ocupava cargo de gerência, passou todos os níveis
            do cargo até a decisão de sair e seguir para o empreendedorismo. &nbsp;
            <br />
            Ela é coautora do livro &quot;O Suscesso é treinável&quot;.
          </WhoIAmPatagraph>
          <a href="#quero-participar">
            <WhoIAmArticleButton>QUERO ME CADASTRAR!</WhoIAmArticleButton>
          </a>
        </WhoIAmArticle>
      </WhoIAmContentWrapper>
    </SectionRosiHistory>
  );
};

export default SectionWhoIAm;
