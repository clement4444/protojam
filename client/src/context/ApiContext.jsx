import React, { createContext, useContext, useState, useEffect } from 'react';

// Crée le contexte
const DataContext = createContext();

// Fournisseur de contexte
export const DataProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState(null);
    const [pains, setPains] = useState(null);
    const [remedies, setRemedies] = useState(null);

    const [Loading, setDataLoading] = useState(true);
    const [dataError, setDataError] = useState(null);

    useEffect(() => {
        const fetchData = async (api, setDonner) => {
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            const result = await response.json();
            setDonner(result);
        };

        setDataLoading(true);
        try {
            fetchData("http://localhost:3310/ingredients", setIngredients);
            fetchData("http://localhost:3310/pains", setPains);
            fetchData("http://localhost:3310/remedies", setRemedies);
        } catch (err) {
            setDataError(err.message);
        }
        setDataLoading(false);
    }, []);

    return (
        <DataContext.Provider value={{ ingredients, pains, remedies, Loading, dataError }}>
            {children}
        </DataContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useData = () => {
    return useContext(DataContext);
};
