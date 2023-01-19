import { FaveFetcher } from './favofetcher';
import { Header } from '../header/header';
export const FavoPage = () => {
    return (
        <>
            <Header />
            <div className="PokeFav">
                <FaveFetcher />
            </div>
        </>
    );
};
