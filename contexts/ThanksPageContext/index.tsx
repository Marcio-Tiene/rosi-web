import React, { createContext, useState } from 'react';

const ThanksPageContext = createContext({
  isThanksPageOpen: false,
});
const SetIsThanksPageOpen = createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(
  null
);

const ThanksPageContextProvider: React.FC = ({ children }) => {
  const [isThanksPageOpen, setIsThanksPageOpen] = useState(false);

  return (
    <ThanksPageContext.Provider value={{ isThanksPageOpen: isThanksPageOpen }}>
      <SetIsThanksPageOpen.Provider value={setIsThanksPageOpen}>
        {children}
      </SetIsThanksPageOpen.Provider>
    </ThanksPageContext.Provider>
  );
};

export { ThanksPageContextProvider, SetIsThanksPageOpen, ThanksPageContext };
