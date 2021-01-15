import PageHead from '../components/PageHead';
import { NextPage } from 'next';
import PageMain from '../components/PageMain';

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="rosi" faviconHref="/favicon.ico" />

      <PageMain>
        <h1>Hello Japão</h1>
      </PageMain>
    </>
  );
};

export default Home;
