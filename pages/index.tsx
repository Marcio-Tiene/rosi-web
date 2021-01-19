import PageHead from '../components/PageHead';
import { NextPage } from 'next';
import PageMain from '../components/PageMain';
import Pixel from '../components/PageHead/services/Facebook/Pixel';
import TopComponent from '../components/SectionTop';
import ThanksPage from '../components/ThanksPage';
import NotificationBanner from '../components/NotificatioBanner';
import ThanksPageModalHook from '../hooks/ThanksPageModalHook';
import ServerErrorHook from '../hooks/ServerErrorHook';

const Home: NextPage = () => {
  const pixelkey = process.env.PIXEL_KEY;
  const { isServerErrorOpen, setIsServerErrorOpen } = ServerErrorHook();
  const { isThanksPageOpen } = ThanksPageModalHook();
  return (
    <>
      <PageHead />

      {!!pixelkey && <Pixel name="PixelScript" pixelKey={pixelkey} />}

      <PageMain>
        <TopComponent />
        <section style={{ height: '100vh' }}></section>
      </PageMain>
      <ThanksPage show={isThanksPageOpen} />
      <NotificationBanner
        msgType="failure"
        isOpen={isServerErrorOpen}
        closeOnClick={() => setIsServerErrorOpen(false)}
      >
        Ops! Algo deu errado em nossos servidores, tente novamente daqui a pouco.
      </NotificationBanner>
    </>
  );
};

export default Home;
