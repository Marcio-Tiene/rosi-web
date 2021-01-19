import React, { createContext, useState } from 'react';

const ServerErrorContext = createContext({
  isServerErrorOpen: false,
});
const SetIsServerErrorOpen = createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(
  null
);

const ServerErrorContextProvider: React.FC = ({ children }) => {
  const [isServerErrorOpen, setIsServerErrorOpen] = useState(false);

  return (
    <ServerErrorContext.Provider value={{ isServerErrorOpen: isServerErrorOpen }}>
      <SetIsServerErrorOpen.Provider value={setIsServerErrorOpen}>
        {children}
      </SetIsServerErrorOpen.Provider>
    </ServerErrorContext.Provider>
  );
};

export { ServerErrorContextProvider, SetIsServerErrorOpen, ServerErrorContext };
