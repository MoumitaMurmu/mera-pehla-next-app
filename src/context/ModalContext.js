const { createContext } = require("react");

// modal ka context banaya
export const ModalContext = createContext();

// modal ka provider banaya

  export const ModalProvider = ({children}) =>{
    return (
        <ModalContext.Provider>
          {children}
        </ModalContext.Provider>
    )
  }
  

