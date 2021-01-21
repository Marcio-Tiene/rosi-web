import React from 'react';
import ThanksPageModalHook from '../../hooks/ThanksPageModalHook';
import Button from '../Button';
import { ModalBackground } from '../Modalbackground';
import SocialMediaCard from '../SocialMediaCard';
import { SocialMediaContainer, ThanksArticle, ThanksCardTitle, ThanksParagraph } from './styles';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

interface IThanksPage {
  show: boolean;
}

const ThanksPage: React.FC<IThanksPage> = ({ show }) => {
  const { setIsPageThanksOpen } = ThanksPageModalHook();

  return (
    <ModalBackground show={show}>
      <ThanksArticle className="animate">
        <ThanksCardTitle>Obrigada por se conectar comigo.</ThanksCardTitle>
        <ThanksParagraph>
          Para ficar por dentro de tudo que compratilho,
          <br /> participe das minhas redes sociais.
        </ThanksParagraph>

        <SocialMediaContainer className="social-media-container">
          <SocialMediaCard
            title="INSCREVA-SE NO MEU CANAL"
            mediaIcon={<AiFillYoutube color="white" size={25} />}
            mediaName="YOUTUBE"
            bgColor="red"
            interactionColor="#ce0101"
            mediaLink="https://www.youtube.com/channel/UCwj3gaZVVC9aMoZ2fhjNdNg"
          />
          <SocialMediaCard
            title="ENTRE NO GRUPO DO TELEGRAM"
            mediaIcon={<FaTelegramPlane color="white" size={25} />}
            mediaName="TELEGRAM"
            bgColor="#0088CC"
            interactionColor="#0196e0"
            // mediaLink="https://t.me/testeiden"
          />
          <SocialMediaCard
            title="ME SIGA NO INSTAGRAM"
            mediaIcon={<AiFillInstagram color="white" size={25} />}
            mediaName="INSTAGRAM"
            bgColor="#C23584"
            interactionColor="#E2306C"
            mediaLink="https://www.instagram.com/rosijob/"
          />
        </SocialMediaContainer>
        <Button className="go-back-button" onClick={() => setIsPageThanksOpen(false)}>
          Voltar
        </Button>
      </ThanksArticle>
    </ModalBackground>
  );
};

export default ThanksPage;
