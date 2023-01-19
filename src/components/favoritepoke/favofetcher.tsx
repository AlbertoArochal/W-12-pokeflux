import { useEffect, useState } from 'react';
import { getPokePic } from '../../helpers/getpokepic';

export const FaveFetcher = () => {
    const [pokePicUrls, setPokePicUrls] = useState<{ [key: string]: string }>(
        {}
    );
    let baseUrl = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://anaju-txikia.onrender.com';
    }

    const [pokemes, setPokemes] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`${baseUrl}/Pokemons`);
            const data = await response.json();
            setPokemes(data);
        };
        fetchPokemon();
    }, [baseUrl]);

    useEffect(() => {
        const promises = pokemes.map((pokea: any) => getPokePic(pokea.name));
        Promise.all(promises).then((urls) => {
            const pokePicUrls = {};
            pokemes.forEach((pokea: any, index: number) => {
                (pokePicUrls as any)[pokea.name] = urls[index];
            });
            setPokePicUrls(pokePicUrls);
        });
    }, [pokemes]);

    return (
        <>
            {pokemes.map((pokemon: any) => {
                return (
                    <div key={pokemon.id}>
                        <h2>{pokemon.name}</h2>
                        {pokePicUrls[pokemon.name] && (
                            <img
                                src={pokePicUrls[pokemon.name]}
                                alt={pokemon.name}
                            />
                        )}
                    </div>
                );
            })}
        </>
    );
};
