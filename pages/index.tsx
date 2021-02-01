import PageHead from '../components/PageHead';
import { NextPage, GetStaticProps } from 'next';
import PageMain from '../components/PageMain';
import Pixel from '../components/PageHead/services/Facebook/Pixel';
import TopComponent from '../components/SectionTop';
import ThanksPage from '../components/ThanksPage';
import NotificationBanner from '../components/NotificatioBanner';
import ThanksPageModalHook from '../hooks/ThanksPageModalHook';
import ServerErrorHook from '../hooks/ServerErrorHook';
import SectionMyPathWay from '../components/SectionMyPathWay';
import SectionWhoIAm from '../components/SectionWhoIAm';
import PageMainFooter from '../components/PageMainFooter';

const Home: NextPage = () => {
  const pixelkey = process.env.NEXT_PUBLIC_PIXEL_KEY;
  const { isServerErrorOpen, setIsServerErrorOpen } = ServerErrorHook();
  const { isThanksPageOpen } = ThanksPageModalHook();
  return (
    <>
      <PageHead />

      {!!pixelkey && <Pixel name="PixelScript" pixelKey={pixelkey} />}

      <PageMain>
        <TopComponent />
        <SectionMyPathWay>alo alo</SectionMyPathWay>
        <SectionWhoIAm />
        <PageMainFooter />
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // In seconds
  };
};
