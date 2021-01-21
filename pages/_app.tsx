import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ServerErrorContextProvider } from '../contexts/ServerErrorContext';
import { ThanksPageContextProvider } from '../contexts/ThanksPageContext';

import GlobalStyles from '../styles/GolbalStyles';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
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
