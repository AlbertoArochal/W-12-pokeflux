import { Header } from '../header/header';
import { PokeLoader } from '../pokeloader/pokeloader';
import { PokeProvider } from '../../context/pokecontext';
import { PokeRouter } from '../../router/pokerouter';
export const PokeView = () => {
    return (
        <>
            <PokeProvider>
                <Header />
                <div className="Pokedex">
                    <PokeLoader />
                </div>
            </PokeProvider>
        </>
    );
};
