import { FaveFetcher } from './favofetcher';
import { Header } from '../header/header';
export const FavoPage = () => {
    return (
        <>
            <Header />
            <div className="Pokedex">
                <p className="Pokedex__counter"></p>
                <FaveFetcher />
            </div>
        </>
    );
};
