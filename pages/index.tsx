import PageHead from '../components/PageHead';
import { NextPage } from 'next';
import PageMain from '../components/PageMain';
import Pixel from '../components/PageHead/services/Facebook/Pixel';

const Home: NextPage = () => {
  const pixelkey = process.env.PIXEL_KEY;
  return (
    <>
      <PageHead />

      {!!pixelkey && <Pixel name="PixelScript" pixelKey={pixelkey} />}

      <PageMain>
        <h1>Hello Japão</h1>
      </PageMain>
    </>
  );
};

export default Home;
