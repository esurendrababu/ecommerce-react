import React, { createContext, useContext, useState } from 'react';

const SaveForLaterContext = createContext();

export const SaveForLaterProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const saveForLater = (item) => {
    setSavedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <SaveForLaterContext.Provider value={{ savedItems, saveForLater }}>
      {children}
    </SaveForLaterContext.Provider>
  );
};

export const useSaveForLater = () => {
  return useContext(SaveForLaterContext);
};
