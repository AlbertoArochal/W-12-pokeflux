import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <h1 className="header__title">Pokemon</h1>
            <Link to="/favorites">
                <button className="header__button favoritepoke">
                    Mis Pokemon
                </button>
            </Link>
            <Link to="/home">
                <button className="header__button favoritepoke">Pokedex</button>
            </Link>
            <img
                src="src/assets/img/pokeball_no_bg.png"
                alt="Pokeball logo"
                className="header__pokeball"
            />
        </header>
    );
};
