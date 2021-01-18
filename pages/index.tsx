import PageHead from '../components/PageHead';
import { NextPage } from 'next';
import PageMain from '../components/PageMain';
import Pixel from '../components/PageHead/services/Facebook/Pixel';
import TopComponent from '../components/SectionTop';

const Home: NextPage = () => {
  const pixelkey = process.env.PIXEL_KEY;
  return (
    <>
      <PageHead />

      {!!pixelkey && <Pixel name="PixelScript" pixelKey={pixelkey} />}

      <PageMain>
        <TopComponent />
      </PageMain>
    </>
  );
};

export default Home;
