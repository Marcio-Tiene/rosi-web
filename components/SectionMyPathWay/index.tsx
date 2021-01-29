import React from 'react';
import PorductCard from '../ProductCard';
import { MyPathWayTitle, SectionTwo, SectioTwoContainerCurve } from './styles';

const SectionMyPathWay: React.FC = () => {
  return (
    <SectionTwo>
      <MyPathWayTitle>Cursos, Mentorias e Mais:</MyPathWayTitle>
      <PorductCard
        onCardClick={() => console.log('teste')}
        // linkTo="https://hotmart.com/product/mentoria-liderenca-e-gestao-de-pessoas/M40989457X?sck=HOTMART_PRODUCT_PAGE"
        cardTitle="teste test"
        cardDescription="testando"
        cardImg="https://static-media.hotmart.com/_2ABhn1cR69PFAUyK393VeryU_M=/600x600/smart/filters:format(jpg):background_color(white)/hotmart/product_contents/29230c67-ef2a-4fbc-9d02-57e78aadedfa/MENTORIAGESTOELIDERANA__HOTMART.jpeg"
      />
      {/* <AchivementsList>
        <li>Pós graduada em gestão de pessoas, formada em administração e coaching</li>
        <li>
          Experiência de mais de 18 anos no ambiente corporativo, sendo 12 em uma multinacional.
        </li>
        <li>Premiada como uma das 5 melhores gerentes do Brasil.</li>
        <li>
          Fui contratada como vendedora e em menos de dois anos já ocupava cargo de gerência, passei
          por todos os níveis do cargo até que decidi sair e seguir para o empreendedorismo.
        </li>
        <li>Coautora do livro O SUCESSO É TREINÁVEL</li>
      </AchivementsList> */}
      <SectioTwoContainerCurve xmlns="http://www.w3.org/2000/CurveSvg" viewBox="0 0 1440 220">
        <path
          fill="#040205"
          fillOpacity="1"
          d="M0,128L80,149.3C160,171,320,213,480,218.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </SectioTwoContainerCurve>
    </SectionTwo>
  );
};

export default SectionMyPathWay;
