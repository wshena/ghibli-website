'use client'
import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuClick, setMenuClick] = useState(false)

  const openMenu = () => setMenuClick(true);
  const closeMenu = () => setMenuClick(false);

  return (
    <GlobalContext.Provider value={{
      menuClick, openMenu, closeMenu, setMenuClick
    }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdateState = () => useContext(GlobalUpdateContext);