import React, { createContext, useState, useEffect } from "react";

import { AppContextProps, AppContextProviderProps } from "./app-context.types";

import { useBackground } from "@/src/hooks";

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const { background } = useBackground(10);

  const defaultProps: AppContextProps = {
    background,
  };

  return (
    <AppContext.Provider value={defaultProps}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
