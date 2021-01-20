import React from 'react';
import ThanksPageModalHook from '../../hooks/ThanksPageModalHook';
import Button from '../Button';
import { ModalBackground } from '../Modalbackground';
import { ThanksArticle, ThanksCardTitle } from './styles';

interface IThanksPage {
  show: boolean;
}

const ThanksPage: React.FC<IThanksPage> = ({ show }) => {
  const { setIsPageThanksOpen } = ThanksPageModalHook();

  return (
    <ModalBackground show={show}>
      <ThanksArticle className="animate">
        <ThanksCardTitle>Obrigado Meu Quirido</ThanksCardTitle>
        <Button className="go-back-button" onClick={() => setIsPageThanksOpen(false)}>
          Voltar
        </Button>
      </ThanksArticle>
    </ModalBackground>
  );
};

export default ThanksPage;
