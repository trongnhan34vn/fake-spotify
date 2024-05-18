import { createContext, useState } from "react";
import React from 'react'

export const MyContext = createContext();

const AppContext = ({children}) => {
  const [isSearching, setSearching] = useState(false);

  return (
    <MyContext.Provider value={{isSearching, setSearching}}>
      {children}
    </MyContext.Provider>
  )
}

export default AppContext