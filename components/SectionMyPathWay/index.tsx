import React from 'react';
import PorductCard from '../ProductCard';
import { MyPathWayTitle, SectionTwo, SectioTwoContainerCurve } from './styles';

const SectionMyPathWay: React.FC = () => {
  return (
    <SectionTwo>
      <MyPathWayTitle>Cursos, Mentorias e Mais:</MyPathWayTitle>
      <PorductCard
        productTags={[
          'Desenvolvimento Pessoal',
          'Liderança',
          'Cursos Online e Serviços de Assinatura',
        ]}
        ProductButtons={[{ buttonText: 'compre now' }]}
        cardTitle="Mentoria Liderança e Gestão de Pessoas"
        cardDescription="Olá, seja muito bem-vindo a Mentoria Liderança e Gestão de Pessoas!

        Os últimos acontecimento a nível mundial tem nos mostrado que a velocidade na tomada de decisão, capacidade de inovar, adaptar-se é o que realmente fará diferença na performance dos profissionais e nas empresas. E esse novo momento tem comprovado a necessidade de ter lideres com uma alta capacidade de lidar com pessoas. Vamos viver a era da humanidade aumentada. Saímos de um processo de rigidez para a flexibilidade. As empresas precisaram cada vez mais profissionais com capacidade de liderar e desenvolver equipe cada vez mais eficientes.
        
        E foi pensando nisso que criei essa mentoria, venha ser esse novo líder."
        cardImg="/mentoria-liderança.jpeg"
      />
      <PorductCard
        productTags={[
          'Desenvolvimento Pessoal',
          'Carreira',
          'Cursos Online e Serviços de Assinatura',
        ]}
        ProductButtons={[
          { buttonText: 'compre now', linkTo: 'https://www.youtube.com/watch?v=J4BVaXkwmM8' },
          { buttonText: 'compre now', linkTo: 'https://www.youtube.com/watch?v=J4BVaXkwmM8' },
        ]}
        cardTitle="Minha Carreira"
        cardDescription="Uma plataforma com aulas gravadas de vários assuntos, como: liderança, foco, disciplina, constância, comunicação, formação de equipe, reuniões produtivas, como fazer entrevistas e muito mais. Além disso, vai ter de forma organizada todas as lives gravadas, resumo de livros, e terá aulas ao vivo."
        cardImg="/minha-carreira-curso.jpg"
      />

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
