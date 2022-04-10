import React, { useContext } from "react";

const Context = React.createContext();

export const AppStateProvider = ({ reducer, initialState = {}, children }) => {
  const value = React.useReducer(reducer, initialState);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppState = () => {
  return useContext(Context);
};
