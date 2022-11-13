export const getMoreInfo = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then(({ id, name, types, sprites }) => {
            const type = types[0].type.name;
            const image = sprites.other.dream_world.front_default;
            return { id, name, type, image };
        });
};
