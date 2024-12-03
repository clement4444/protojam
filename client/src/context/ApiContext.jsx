import React, { createContext, useContext, useState, useEffect } from 'react';

// Crée le contexte
const DataContext = createContext();

// Fournisseur de contexte
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);
    const [dataError, setDataError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            try {
                const response = await fetch("http://localhost:3310/data");
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setDataError(err.message);
            } finally {
                setDataLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data, dataLoading, dataError }}>
            {children}
        </DataContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useData = () => {
    return useContext(DataContext);
};
