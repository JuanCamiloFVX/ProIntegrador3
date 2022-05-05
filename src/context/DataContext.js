import React, {createContext,useState} from 'react';

export const DataContext = createContext();

const dataExample = {
  value: ''
};

export const DataProvider = ({children})=>{

    const [data,setData] = useState(dataExample);

    return(
        <DataContext.Provider value={{
            data,setData
        }}>
            {children}
        </DataContext.Provider>
    );
};