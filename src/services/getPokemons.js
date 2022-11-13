import { base_url } from "./base_url";
import { getMoreInfo } from "./getMoreInfo";

export const getPokemons = (page) => {
    const url = `${base_url}?offset=${(page - 1) * 20}&limit=20`;
    return fetch(url)
        .then((res) => res.json())
        .then(({ results }) => {
            return Promise.all(results.map(({ url }) => getMoreInfo(url)));
        });
};
