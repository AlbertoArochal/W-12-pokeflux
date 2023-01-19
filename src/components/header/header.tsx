import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Pokemon</h1>
            <img
                src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
                alt="Pokeball logo"
                className="header__pokeball"
            />
            <div className="header__buttons">
                <Link to="/favorites">
                    <button className="header__button favoritepoke">
                        Mis Pokemon
                    </button>
                </Link>
                <Link to="/home">
                    <button className="header__button favoritepoke">
                        Pokedex
                    </button>
                </Link>
            </div>
        </header>
    );
};
