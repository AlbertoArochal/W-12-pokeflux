import { Header } from '../header/header';
import { PokeLoader } from '../pokeloader/pokeloader';
import { PokeContext, PokeProvider } from '../../context/pokecontext';
import { useContext } from 'react';
export const PokeView = () => {
    return (
        <>
            <PokeProvider>
                <Header />
                <div className="Pokedex">
                    <h1 className="Pokedex__header">Pokedex</h1>
                    <p className="Pokedex__counter"></p>
                    <PokeLoader />
                </div>
            </PokeProvider>
        </>
    );
};
