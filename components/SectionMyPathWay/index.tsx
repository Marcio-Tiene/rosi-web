import React from 'react';
import { AchivementsList, MyPathWayTitle, SectionTwo, SectioTwoContainerCurve } from './styles';

const SectionMyPathWay: React.FC = () => {
  return (
    <SectionTwo>
      <MyPathWayTitle>Minha Trajetória:</MyPathWayTitle>
      <AchivementsList>
        <li>
          {/* <CheckIcon color="var(--primary-color)" /> */}
          Pós graduada em gestão de pessoas, formada em administração e coaching
        </li>
        <li>
          Experiência de mais de 18 anos no ambiente corporativo, sendo 12 em uma multinacional.
        </li>
        <li>Premiada como uma das 5 melhores gerentes do Brasil.</li>
        <li>
          Fui contratada como vendedora e em menos de dois anos já ocupava cargo de gerência, passei
          por todos os níveis do cargo até que decidi sair e seguir para o empreendedorismo.
        </li>
        <li>Coautora do livro O SUCESSO É TREINÁVEL</li>
      </AchivementsList>
      <SectioTwoContainerCurve xmlns="http://www.w3.org/2000/CurveSvg" viewBox="0 0 1440 220">
        <path
          fill="#030018"
          fillOpacity="1"
          d="M0,128L80,149.3C160,171,320,213,480,218.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </SectioTwoContainerCurve>
    </SectionTwo>
  );
};

export default SectionMyPathWay;
