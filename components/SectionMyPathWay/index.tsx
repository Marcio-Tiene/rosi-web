import React from 'react';
import PorductCard from '../ProductCard';
import { MyPathWayTitle, SectionTwo, SectioTwoContainerCurve } from './styles';

const SectionMyPathWay: React.FC = () => {
  return (
    <SectionTwo>
      <MyPathWayTitle>Cursos, Mentorias e Mais:</MyPathWayTitle>
      <PorductCard
        productTags={
          [
            // 'Desenvolvimento Pessoal',
            // 'Liderança',
            // 'Cursos Online e Serviços de Assinatura',
          ]
        }
        ProductButtons={[
          {
            linkTo: 'https://pay.hotmart.com/M40989457X?checkoutMode=10&bid=1613756984372',
            buttonText: 'GARANTA SUA VAGA!',
          },
        ]}
        cardTitle="Mentoria Liderança e Gestão de Pessoas"
        cardDescription={
          <p>
            A Mentoria de Liderança e Gestão de Pessoas é um programa de desenvolvimento de líderes
            (PDL) com metodologia fundamentada no protagonismo do aluno e com aplicabilidade
            imediata.
            <br />
            <br />
            Você vai aprender – com quem percorreu o caminho – conteúdos que vão acelerar seus
            resultados, melhorar sua gestão do tempo, comunicação, networking, inteligência
            emocional e como construir times de alta desempenho.
            <br />
            <br />
            <strong> Formato:</strong> 12 encontros, online e ao vivo
            <br />
            <br />
            <strong> Para quem?</strong> Líderes e para quem quer ser. {`  `}Lembre-se habilidade de
            liderar não tem relação única com cargo.
            <br />
            <br />
            <strong>PRÓXIMA TURMA: ABRIL/21</strong>
          </p>
        }
        cardImg="/mentoria-liderança.jpeg"
      />
      <PorductCard
        productTags={
          [
            // 'Desenvolvimento Pessoal',
            // 'Carreira',
            // 'Cursos Online e Serviços de Assinatura',
          ]
        }
        ProductButtons={[
          {
            buttonText: 'PLANO MENSAL',
            linkTo: 'https://pay.hotmart.com/E43547900W?split=12&bid=1607291157381&checkoutMode=0',
          },
          {
            buttonText: 'PLANO ANUAL',
            linkTo:
              'https://pay.hotmart.com/E43547900W?off=i1zn5282&bid=1607430681285&checkoutMode=0',
          },
        ]}
        cardTitle="Minha Carreira"
        cardDescription={
          <p>
            Plataforma criada para seu desenvolvimento profissional. Você terá acesso a conteúdos
            exclusivos sobre foco, disciplina, gestão do tempo, performance, vendas, liderança,
            trabalhar em equipe, comunicação e muito mais.
            <br />
            <br />
            Além disso, terá acesso a todas as minhas lives de forma organizada, apostila,
            ferramentas, planners semanal, mensal, anual, plano de estudo, plano de negócios.
            <br />
            <br />
            <strong> Formato: </strong> Conteúdos semanais, aulas gravadas e ao vivo (com aviso
            prévio).
            <br />
            <br />
            <strong>Para quem?</strong> Qualquer profissional que precise aumentar sua performance.
            <br />
            <br />
            <strong>COMECE AGORA!</strong>
          </p>
        }
        cardImg="/minha-carreira-curso.jpeg"
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
