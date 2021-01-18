import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThanksPageContextProvider } from '../contexts/ThanksPageContext';

import GlobalStyles from '../styles/GolbalStyles';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThanksPageContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThanksPageContextProvider>
    </>
  );
};

export default MyApp;
