import React from 'react';
import ThanksPageModalHook from '../../hooks/ThanksPageModalHook';
import Button from '../Button';
import { ModalBackground } from '../Modalbackground';
import { ThanksArticle } from './styles';

interface IThanksPage {
  show: boolean;
}

const ThanksPage: React.FC<IThanksPage> = ({ show }) => {
  const { setIsPageThanksOpen } = ThanksPageModalHook();

  return (
    <ModalBackground show={show}>
      <ThanksArticle className="animate">
        <h1>Obrigado Meu Quirido</h1>
        <Button onClick={() => setIsPageThanksOpen(false)}>De nada!</Button>
      </ThanksArticle>
    </ModalBackground>
  );
};

export default ThanksPage;
