import { Header } from '../header/header';
import { PokeLoader } from '../pokeloader/pokeloader';
export const PokeView = () => {
    return (
        <>
            {Header}
            <div className="Pokedex">
                <h1 className="Pokedex__header">Pokedex</h1>
                <p className="Pokedex__counter"></p>
                <>{PokeLoader}</>
            </div>
        </>
    );
};
