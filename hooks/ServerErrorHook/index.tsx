/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import { ServerErrorContext, SetIsServerErrorOpen } from '../../contexts/ServerErrorContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ServerErrorModalHook = () => {
  const { isServerErrorOpen } = useContext(ServerErrorContext);
  const setIsServerErrorOpen = useContext(SetIsServerErrorOpen) as React.Dispatch<
    React.SetStateAction<boolean>
  >;

  return { isServerErrorOpen, setIsServerErrorOpen };
};

export default ServerErrorModalHook;
