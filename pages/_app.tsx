import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ServerErrorContextProvider } from '../contexts/ServerErrorContext';
import { ThanksPageContextProvider } from '../contexts/ThanksPageContext';

import GlobalStyles from '../styles/GolbalStyles';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      console.log(document.visibilityState);
      // Modify behavior...
    });
  }, []);
  return (
    <>
      <ServerErrorContextProvider>
        <ThanksPageContextProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThanksPageContextProvider>
      </ServerErrorContextProvider>
    </>
  );
};

export default MyApp;
