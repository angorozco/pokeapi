import React, { useState, createContext, useContext } from "react";

const CaughtContext = createContext([]);
const { Provider } = CaughtContext;

export const useCaughtContext = () => useContext(CaughtContext);

const CaughtProvider = ({ children }) => {
    const [caught, setCaught] = useState([]);

    const clear = () => setCaught([]);

    const isCaught = (id) => {
        return caught.some((pokemon) => pokemon.id === id);
    };

    const handleCatch = (pokemon) => {
        if (isCaught(pokemon.id)) {
            setCaught(
                caught.filter((character) => character.id !== pokemon.id)
            );
        } else {
            setCaught([...caught, pokemon]);
        }
    };

    return (
        <Provider value={{ clear, isCaught, handleCatch, caught }}>
            {children}
        </Provider>
    );
};

export default CaughtProvider;
