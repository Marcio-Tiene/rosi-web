/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import { ThanksPageContext, SetIsThanksPageOpen } from '../../contexts/ThanksPageContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ThanksPageModalHook = () => {
  const { isThanksPageOpen } = useContext(ThanksPageContext);
  const setIsPageThanksOpen = useContext(SetIsThanksPageOpen) as React.Dispatch<
    React.SetStateAction<boolean>
  >;

  return { isThanksPageOpen, setIsPageThanksOpen };
};

export default ThanksPageModalHook;
