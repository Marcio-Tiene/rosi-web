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
            &emsp;&nbsp; Rosi Job é apaixonada por pessoas. É conhecida por sua carreira meteórica e
            seus resultados expressivos com equipes. <br />
            <br /> &emsp;&nbsp; Sua especialidade é liderança com foco em gestão de pessoas, pois
            ela acredita que os resultados são 100% gerados por elas. Pós graduada em gestão de
            pessoas, formada em administração e coaching. <br />
            <br />
            &emsp;&nbsp; Com experiência de mais de 18 anos no ambiente corporativo, sendo 12 em uma
            multinacional. Premiada como uma das 5 melhores gerentes do Brasil. Foi contratada com
            vendedora e em menos de dois anos já ocupava cargo de gerência, passou todos os níveis
            do cargo até a decisão de sair e seguir para o empreendedorismo. <br />
            <br />
            &emsp;&nbsp; Ela é coautora do livro O Suscesso É Treinável.
          </WhoIAmPatagraph>
          <a href="#quero-participar">
            <WhoIAmArticleButton>Quero me cadastrar!</WhoIAmArticleButton>
          </a>
        </WhoIAmArticle>
      </WhoIAmContentWrapper>
    </SectionRosiHistory>
  );
};

export default SectionWhoIAm;
