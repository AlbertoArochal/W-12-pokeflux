import { Header } from '../header/header';

export const favoPage = () => {
    return (
        <>
            <Header />
            <div className="Pokedex">
                <h1 className="Pokedex__header">Pokedex</h1>
                <p className="Pokedex__counter"></p>
            </div>
        </>
    );
};
