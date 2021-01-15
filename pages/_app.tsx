import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import GlobalStyles from '../styles/GolbalStyles';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default MyApp;
