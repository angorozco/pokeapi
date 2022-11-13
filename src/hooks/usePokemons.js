import { useState, useEffect } from "react";
import { getPokemons } from "../services/getPokemons";

export const usePokemons = (page) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getPokemons(page)
                .then((res) => setPokemons(res))
                .finally(() => setIsLoading(false));
        }, 2000);
    }, [page]);

    return { pokemons, isLoading };
};
