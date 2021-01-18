import { NextPage } from 'next';
import React from 'react';
import PageHead from '../components/PageHead';
import PageMain from '../components/PageMain';
import LandingForm from '../components/LandingForm';
import ThanksPage from '../components/ThanksPage';
import ThanksPageModalHook from '../hooks/ThanksPageModalHook';
import NotificationBanner from '../components/NotificatioBanner';

const MeuCurso: NextPage = () => {
  const { isThanksPageOpen } = ThanksPageModalHook();
  return (
    <>
      <PageHead />

      <PageMain>
        <h1>Hello curso novo</h1>
        <LandingForm
          MachineCode={0}
          SequenceLevelCode={0}
          EmailSequenceCode={0}
          Score={10}
          Source="Landing page meu curso"
        />
      </PageMain>
      <ThanksPage show={isThanksPageOpen} />
      <NotificationBanner msgType="failure" isOpen={false}>
        Ops! Algo deu errado em nossos servidores, tente novamente daqui a pouco.
      </NotificationBanner>
    </>
  );
};

export default MeuCurso;
