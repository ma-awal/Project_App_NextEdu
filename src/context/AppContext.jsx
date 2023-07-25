import React, { createContext } from 'react';

const AppContext = createContext({});
const value = {};
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
