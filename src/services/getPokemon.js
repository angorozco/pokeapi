import { base_url } from "./base_url";

export const getPokemon = (datum) => {
    const url = `${base_url}/${datum}/`;

    return fetch(url)
        .then((res) => res.json())
        .then(({ name, id, sprites, types, weight, height }) => {
            const image = sprites.other.dream_world.front_default;
            const type = types[0].type.name;
            return { name, id, image, type, weight, height };
        });
};
