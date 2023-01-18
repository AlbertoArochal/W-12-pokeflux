import { useEffect, useState } from 'react';
import { getPokePic } from '../../helpers/getpokepic';
import { useContext } from 'react';
import { PokeContext } from '../../context/pokecontext';

export interface PokeaType {
    name: string;
    url: string;
}

export const PokeLoader = () => {
    const { pokeArray, setPokeArray } = useContext(PokeContext);
    const { paginationState, paginationDispatch } = useContext(PokeContext);
    const [pokePicUrls, setPokePicUrls] = useState<{ [key: string]: string }>(
        {}
    );

    const fetchPokemon = (offset: number, limit: number) => {
        fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => {
                setPokeArray(data.results);
            });
    };

    useEffect(() => {
        fetchPokemon(paginationState.offset, paginationState.limit);
    }, []);

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

    return (
        <div className="pokeLoader">
            <ul className="pokeLoader__ul">
                {pokeArray.length > 0 &&
                    pokeArray.map((pokea: PokeaType) => {
                        return (
                            <li className="pokeLoader__li" key={pokea.name}>
                                {pokePicUrls[pokea.name] && (
                                    <img
                                        src={(pokePicUrls as any)[pokea.name]}
                                        alt={pokea.name}
                                        className="pokeLoader__img"
                                    />
                                )}
                                <p>{pokea.name}</p>
                            </li>
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
