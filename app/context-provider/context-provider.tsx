"use client";

import { SortBy } from '@typeSortType';
import React, { useState } from 'react';
// import { EmailNotificationStep } from 'types/EmailNotificationStep';

export const ContextProvider = React.createContext({
  isOrderConfirm: false,
  setIsOrderConfirm: (isOpen: boolean) => {},
  isContactsOpen: false,
  setIsContactsOpen: (isOpen: boolean) => {},
  // sortTitle: SortBy.popularity,
  // setSortTitle: (sortType: SortBy) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOrderConfirm, setIsOrderConfirm] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  // const [sortTitle, setSortTitle] = useState<SortBy>(SortBy.popularity);

  const contextValue = {
    isOrderConfirm,
    setIsOrderConfirm,
    isContactsOpen,
    setIsContactsOpen,
    // sortTitle,
    // setSortTitle,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
}
