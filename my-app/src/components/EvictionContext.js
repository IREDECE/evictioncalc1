import React, { createContext, useContext, useState } from 'react';

const EvictionDataContext = createContext();

export function useEvictionData() {
    return useContext(EvictionDataContext);
}

export const EvictionDataProvider = ({ children }) => {
    const [evictionData, setEvictionData] = useState({
        numberEvicted: 0,
        numChildEvicted: 0,
        numHouseEvicted: 0,
        evictionPercentage: 0
    });

    const updateEvictionData = data => {
        setEvictionData(prevData => ({ ...prevData, ...data }));
    };

    return (
        <EvictionDataContext.Provider value={{ evictionData, updateEvictionData }}>
            {children}
        </EvictionDataContext.Provider>
    );
};
