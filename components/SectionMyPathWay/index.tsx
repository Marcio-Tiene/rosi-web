import React from 'react';
import { AchivementsList, CheckIcon, MyPathWayTitle, SectionTwo } from './styles';

const SectionMyPathWay: React.FC = () => {
  return (
    <SectionTwo>
      <MyPathWayTitle>Minha Trajetória:</MyPathWayTitle>
      <AchivementsList>
        <li>
          <CheckIcon color="var(--primary-color)" />
          Pós graduada em gestão de pessoas, formada em administração e coaching
        </li>
        <li>
          <CheckIcon color="var(--primary-color)" />
          experiência de mais de 18 anos no ambiente corporativo, sendo 12 em uma multinacional.
        </li>
        <li>
          <CheckIcon color="var(--primary-color)" />
          Premiada como uma das 5 melhores gerentes do Brasil.
        </li>
        <li>
          <CheckIcon color="var(--primary-color)" />
          Fui contratada como vendedora e em menos de dois anos já ocupava cargo de gerência, passei
          por todos os níveis do cargo até que decidi sair e seguir para o empreendedorismo.
        </li>
        <li>
          <CheckIcon color="var(--primary-color)" />
          Coautora do livro O SUCESSO É TREINÁVEL
        </li>
      </AchivementsList>
    </SectionTwo>
  );
};

export default SectionMyPathWay;
