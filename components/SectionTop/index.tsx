import React from 'react';
import LandingForm from '../LandingForm';
import { SectionTop, SectionTopImg } from './styles';

const TopComponent: React.FC = () => {
  return (
    <SectionTop bgImg="/main-bg-img.png">
      <SectionTopImg src="/logotype.png" />
      <LandingForm
        MachineCode={0}
        SequenceLevelCode={0}
        EmailSequenceCode={0}
        Score={10}
        Source="Landing page meu curso"
      />
    </SectionTop>
  );
};

export default TopComponent;
