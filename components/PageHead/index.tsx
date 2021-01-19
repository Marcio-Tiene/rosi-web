import React from 'react';
import Head from 'next/head';

const PageHead: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rosi Job</title>

        {!!children && children}
      </Head>
    </>
  );
};

export default PageHead;
