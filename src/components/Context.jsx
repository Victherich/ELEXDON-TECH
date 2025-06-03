
import React, { createContext } from 'react'


export const Context = createContext();

const ContextProvider = ({children}) => {

const yes ="true"




  return (
    <Context.Provider value={{yes}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider



// whmcs

// identifier:1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5
// 
// secret:oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS




