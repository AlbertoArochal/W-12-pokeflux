import { Header } from '../header/header';
import { PokeLoader } from '../pokeloader/pokeloader';
import { PokeProvider } from '../../context/pokecontext';
export const PokeView = () => {
    return (
        <>
            <PokeProvider>
                <Header />
                <div className="pokedex">
                    <PokeLoader />
                </div>
            </PokeProvider>
        </>
    );
};
