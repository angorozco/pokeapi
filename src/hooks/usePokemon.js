import { useState, useEffect } from "react";
import { getPokemon } from "../services/getPokemon";

export const usePokemon = (datum) => {
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getPokemon(datum)
                .then((res) => setPokemon(res))
                .finally(() => setIsLoading(false));
        }, 1000);
    }, [datum]);

    return { pokemon, isLoading };
};
