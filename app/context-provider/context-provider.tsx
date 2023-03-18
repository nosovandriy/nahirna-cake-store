"use client";

import React, { useState } from 'react';
// import { EmailNotificationStep } from 'types/EmailNotificationStep';

export const ContextProvider = React.createContext({
  isOrderConfirm: false,
  setIsOrderConfirm: (isOpen: boolean) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOrderConfirm, setIsOrderConfirm] = useState(false);

  const contextValue = {
    isOrderConfirm,
    setIsOrderConfirm,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
}
