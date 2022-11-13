import { getMoreInfo } from "./getMoreInfo";

export const getPokemons = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then(({ results }) => {
            return Promise.all(results.map(({ url }) => getMoreInfo(url)));
        });
};
