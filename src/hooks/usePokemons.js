import { useState, useEffect } from "react";
import { base_url } from "../services/base_url";
import { getPokemons } from "../services/getPokemons";

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getPokemons(base_url)
                .then((res) => setPokemons(res))
                .finally(() => setIsLoading(false));
        }, 2000);
    }, []);

    return { pokemons, isLoading };
};
