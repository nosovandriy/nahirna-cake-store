"use client";

import React, { useState } from 'react';
// import { EmailNotificationStep } from 'types/EmailNotificationStep';

export const ContextProvider = React.createContext({
  isOpenPopUpBasket: false,
  setIsOpenPopUpBasket: (isOpen: boolean) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpenPopUpBasket, setIsOpenPopUpBasket] = useState(false);

  const contextValue = {
    isOpenPopUpBasket,
    setIsOpenPopUpBasket,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
}
