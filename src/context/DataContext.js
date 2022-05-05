import React, {createContext,useState} from 'react';

export const DataContext = createContext();

const dataExample = {
  value: ''
};

export const DataProvider = ({children})=>{

    const [dato,setDato] = useState(dataExample);

    return(
        <DataContext.Provider value={{
            dato,setDato
        }}>
            {children}
        </DataContext.Provider>
    );
};