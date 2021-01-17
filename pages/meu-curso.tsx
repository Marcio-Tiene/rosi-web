import { NextPage } from 'next';
import React from 'react';
import PageHead from '../components/PageHead';
import PageMain from '../components/PageMain';
import LandingForm from '../components/LandingForm';

const MeuCurso: NextPage = () => {
  return (
    <>
      <PageHead title="Meu curso" faviconHref="/favicon.ico" />

      <PageMain>
        <h1>Hello curso novo</h1>
        <LandingForm />
      </PageMain>
    </>
  );
};

export default MeuCurso;