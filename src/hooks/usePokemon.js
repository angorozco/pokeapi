import { useState, useEffect } from "react";
import { getPokemon } from "../services/getPokemon";

export const usePokemon = (datum) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemon(datum).then((res) => setPokemon(res));
    }, [datum]);

    return { pokemon };
};
