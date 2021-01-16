import PageHead from '../components/PageHead';
import { NextPage } from 'next';
import PageMain from '../components/PageMain';
import Pixel from '../services/Facebook/Pixel';

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="rosi" faviconHref="/favicon.ico" />
      <Pixel name="pixelOne" />

      <PageMain>
        <h1>Hello Japão</h1>
      </PageMain>
    </>
  );
};

export default Home;
