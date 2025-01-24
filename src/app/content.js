'use client';

import React, { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [contentArray, setContentArray] = useState([]);

    return (
        <ContentContext.Provider value={{ contentArray, setContentArray }}>
            {children}
        </ContentContext.Provider>
    );
};

// Custom hook to use content context
const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};

export default useContent;
