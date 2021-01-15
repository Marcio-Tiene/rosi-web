import React from 'react';
import Head from 'next/head';

interface IPageHead {
  title: string;
  faviconHref?: string;
}

const PageHead: React.FC<IPageHead> = ({ title, faviconHref, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {!!faviconHref && <link rel='icon' href={faviconHref} />}
        {!!children && children}
      </Head>
    </>
  );
};

export default PageHead;
