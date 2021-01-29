import React from 'react';
import PorductCard from '../ProductCard';
import { MyPathWayTitle, SectionTwo, SectioTwoContainerCurve } from './styles';

const SectionMyPathWay: React.FC = () => {
  return (
    <SectionTwo>
      <MyPathWayTitle>Cursos, Mentorias e Mais:</MyPathWayTitle>
      <PorductCard
        productTags={['Desenvolvimento Pessoal', 'Cursos Online e Serviços de Assinatura']}
        linkTo="https://pay.hotmart.com/M40989457X?off=nfqoq262&sck=HOTMART_PRODUCT_PAGE&checkoutMode=0&bid=1611926746389"
        cardTitle="Mentoria Liderança e Gestão de Pessoas"
        cardDescription="Olá, seja muito bem-vindo a Mentoria Liderança e Gestão de Pessoas!

        Os últimos acontecimento a nível mundial tem nos mostrado que a velocidade na tomada de decisão, capacidade de inovar, adaptar-se é o que realmente fará diferença na performance dos profissionais e nas empresas. E esse novo momento tem comprovado a necessidade de ter lideres com uma alta capacidade de lidar com pessoas. Vamos viver a era da humanidade aumentada. Saímos de um processo de rigidez para a flexibilidade. As empresas precisaram cada vez mais profissionais com capacidade de liderar e desenvolver equipe cada vez mais eficientes.
        
        E foi pensando nisso que criei essa mentoria, venha ser esse novo líder."
        cardImg="https://static-media.hotmart.com/_2ABhn1cR69PFAUyK393VeryU_M=/600x600/smart/filters:format(jpg):background_color(white)/hotmart/product_contents/29230c67-ef2a-4fbc-9d02-57e78aadedfa/MENTORIAGESTOELIDERANA__HOTMART.jpeg"
      />
      <PorductCard
        productTags={['Desenvolvimento Pessoal', 'Cursos Online e Serviços de Assinatura']}
        linkTo="https://pay.hotmart.com/E43547900W?split=12&bid=1607291157381&checkoutMode=0"
        cardTitle="Minha Carreira"
        cardDescription="Uma plataforma com aulas gravadas de vários assuntos, como: liderança, foco, disciplina, constância, comunicação, formação de equipe, reuniões produtivas, como fazer entrevistas e muito mais. Além disso, vai ter de forma organizada todas as lives gravadas, resumo de livros, e terá aulas ao vivo."
        cardImg="https://static-media.hotmart.com/vJSkPD8n5BBzhv4Vb5rqd8P16UY=/600x600/smart/filters:format(jpg):background_color(white)/hotmart/product_contents/61ab5d49-0467-4d36-a874-0de7ebf03bf8/POST7Copia.jpg"
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
