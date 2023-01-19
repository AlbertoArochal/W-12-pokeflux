import { useEffect, useState } from 'react';
import { getPokePic } from '../../helpers/getpokepic';
import { useContext, useCallback } from 'react';
import { PokeContext } from '../../context/pokecontext';

export interface PokeaType {
    name: string;
    url: string;
}

export const PokeLoader = () => {
    const { pokeArray, setPokeArray } = useContext(PokeContext);
    const { paginationState, paginationDispatch } = useContext(PokeContext);
    const { faveState, faveDispatch } = useContext(PokeContext);
    const [pokePicUrls, setPokePicUrls] = useState<{ [key: string]: string }>(
        {}
    );
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com';
    }

    const fetchPokemon = useCallback(
        (offset: number, limit: number) => {
            fetch(
                `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            )
                .then((response) => response.json())
                .then((data) => {
                    setPokeArray(data.results);
                });
        },
        [paginationState.offset, paginationState.limit, setPokeArray]
    );

    useEffect(() => {
        fetchPokemon(paginationState.offset, paginationState.limit);
    }, [paginationState.offset, paginationState.limit, fetchPokemon]);

    useEffect(() => {
        const promises = pokeArray.map((pokea: PokeaType) =>
            getPokePic(pokea.name)
        );
        Promise.all(promises).then((urls) => {
            const pokePicUrls = {};
            pokeArray.forEach((pokea: PokeaType, index: number) => {
                (pokePicUrls as any)[pokea.name] = urls[index];
            });
            setPokePicUrls(pokePicUrls);
        });
    }, [pokeArray]);

    const handleBack = () => {
        paginationDispatch({ type: 'PREV_PAGE', payload: 25 });
        fetchPokemon(paginationState.offset, paginationState.limit);
    };
    function handleNext() {
        paginationDispatch({ type: 'NEXT_PAGE', payload: 25 });
        fetchPokemon(paginationState.offset, paginationState.limit);
    }

    function handleFave(pokemon: string) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => response.json())
            .then((data) => {
                const pokemon = data;
                faveDispatch({ type: 'SELECT_FAVE', payload: pokemon });
                const fave = {
                    name: faveState.data.name,
                    picture: faveState.data.sprites.front_default,
                    id: faveState.data.id,
                    type: faveState.data.types[0].type.name,
                    weight: faveState.data.weight,
                    height: faveState.data.height,
                    hp: faveState.data.stats[0].base_stat,
                    attack: faveState.data.stats[1].base_stat,
                    defense: faveState.data.stats[2].base_stat,
                };
                fetch(`${baseUrl}/Pokemons`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fave),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="pokeLoader">
            <ul className="pokeLoader__ul">
                {pokeArray.length > 0 &&
                    pokeArray.map((pokea: PokeaType, index) => {
                        return (
                            <>
                                <li className="pokeLoader__li" key={pokea.name}>
                                    <img
                                        className="pokeLoader__ball"
                                        src="https://art.pixilart.com/bdeca8ec13f4905.png"
                                        alt="pokeball"
                                        onClick={() => handleFave(pokea.name)}
                                        width="30px"
                                        height="30px"
                                        key={index}
                                    ></img>
                                    {pokePicUrls[pokea.name] && (
                                        <img
                                            src={
                                                (pokePicUrls as any)[pokea.name]
                                            }
                                            alt={pokea.name}
                                            className="pokeLoader__img"
                                        />
                                    )}
                                    <p>{pokea.name}</p>
                                </li>
                            </>
                        );
                    })}
            </ul>
            <div className="pokeLoader__buttons">
                <button className="pokeLoader__button" onClick={handleBack}>
                    Back
                </button>
                <button className="pokeLoader__button" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};
