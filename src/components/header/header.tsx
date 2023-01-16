export const Header = () => {
    return (
        <header>
            <h1 className="header__title">Pokemon</h1>
            <button className="header__button favoritepoke">Mis Pokemon</button>
            <img
                src="src/assets/img/pokeball_no_bg.png"
                alt=""
                className="header__pokeball"
            />
        </header>
    );
};
