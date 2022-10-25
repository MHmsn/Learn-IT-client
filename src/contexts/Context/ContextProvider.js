import React, { createContext, useState } from 'react';


export const AllContext = createContext();


const ContextProvider = ({children}) => {
    const [dark, setDark] = useState(true);

    const allInfo = {dark, setDark}
    return (
        <AllContext.Provider value={allInfo}>{children}</AllContext.Provider>
    );
};

export default ContextProvider;