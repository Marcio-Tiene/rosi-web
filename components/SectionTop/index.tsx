import React from 'react';
import LandingForm from '../LandingForm';
import { CurveSvg, SectionTop, SectionTopImg } from './styles';

const TopComponent: React.FC = () => {
  return (
    <>
      <SectionTop bgImg="/main-bg-img.jpg">
        <SectionTopImg src="/logotype.png" />
        <LandingForm
          MachineCode={0}
          SequenceLevelCode={0}
          EmailSequenceCode={0}
          Score={10}
          Source="Landing page meu curso"
        >
          Que tal trocarmos experiencias sobre liderança e gestão?
        </LandingForm>
        <CurveSvg xmlns="http://www.w3.org/2000/CurveSvg" viewBox="0 0 1440 220">
          <path
            fill="#F0F0F0"
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,218.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </CurveSvg>
      </SectionTop>
    </>
  );
};

export default TopComponent;
