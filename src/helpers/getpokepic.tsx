export const getPokePic = (pokemon: string) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            return data.sprites.front_default;
        })
        .catch((err) => console.log(err));
};

getPokePic('pikachu').then((data) => console.log(data));
