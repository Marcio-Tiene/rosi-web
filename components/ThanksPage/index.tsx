import React from 'react';
import ThanksPageModalHook from '../../hooks/ThanksPageModalHook';
import { ModalBackground } from '../Modalbackground';
import SocialMediaCard from '../SocialMediaCard';
import {
  CloseIcon,
  SocialMediaContainer,
  ThanksArticle,
  ThanksCardTitle,
  ThanksParagraph,
} from './styles';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';

interface IThanksPage {
  show: boolean;
}

const ThanksPage: React.FC<IThanksPage> = ({ show }) => {
  const { setIsPageThanksOpen } = ThanksPageModalHook();

  return (
    <ModalBackground show={show}>
      <ThanksArticle className="animate">
        <ThanksCardTitle>Obrigada por se conectar comigo.</ThanksCardTitle>
        <CloseIcon size={25} onClick={() => setIsPageThanksOpen(false)} />
        <ThanksParagraph>
          Para ficar por dentro de tudo que compartilho,
          <br /> participe das minhas redes sociais.
        </ThanksParagraph>

        <SocialMediaContainer className="social-media-container">
          <SocialMediaCard
            title="ME SIGA NO INSTAGRAM"
            mediaIcon={<AiFillInstagram color="white" size={25} />}
            mediaName="INSTAGRAM"
            bgColor="#C23584"
            interactionColor="#E2306C"
            mediaLink="https://www.instagram.com/rosijob/"
          />
          <SocialMediaCard
            title="ENTRE NO GRUPO DO WHATSAPP"
            mediaIcon={<ImWhatsapp color="white" size={25} />}
            mediaName="WHATSAPP"
            bgColor="#25D366"
            interactionColor="#22c05c"
            mediaLink="https://chat.whatsapp.com/BjbooVmGxko4TuvkJWsevJ"
          />
          <SocialMediaCard
            title="INSCREVA-SE NO MEU CANAL"
            mediaIcon={<AiFillYoutube color="white" size={25} />}
            mediaName="YOUTUBE"
            bgColor="red"
            interactionColor="#ce0101"
            mediaLink="https://www.youtube.com/channel/UCwj3gaZVVC9aMoZ2fhjNdNg"
          />
        </SocialMediaContainer>
      </ThanksArticle>
    </ModalBackground>
  );
};

export default ThanksPage;
