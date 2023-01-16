import { useEffect, useState } from 'react';

type Pokea = {
    name: string;
    url: string;
    sprites: {
        front_default: string;
    };
};

export const PokeLoader = () => {
    const [pokeaArray, setPokeaArray] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
            .then((response) => response.json())
            .then((data) => {
                setPokeaArray(data.results);
            });
    }, []);

    return (
        <div className="pokeLoader">
            <ul className="pokeLoader__ul">
                {pokeaArray.map((pokea: Pokea) => {
                    return (
                        <>
                            <img
                                src="src/assets/img/pokemini.png"
                                alt="minipokeball"
                            ></img>
                            <li className="pokeLoader__li">
                                <img
                                    src={pokea.sprites.front_default}
                                    alt={pokea.name}
                                />
                                <p>{pokea.name}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};
