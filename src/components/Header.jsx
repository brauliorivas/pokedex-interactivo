import React from 'react';
import pokeapi from '@assets/pokeapi.png';
import '@styles/Header.scss'
import heart from '@assets/heart.png';
import Favorites from '@components/Favorites';
import AppFavorites from '@context/AppFavorites';
import AppShowFavorites from '@context/AppShowFavorites';

const Header = () => {
    const [favorites, setFavorites] = React.useContext(AppFavorites);
    const [show, setShow] = React.useContext(AppShowFavorites);

    const handleClick = () => {
        if (favorites.length > 0 ) {
            setShow(!show);   
        }
    }

    React.useEffect(() => {
        if (favorites.length == 0) {
            setShow(false);
        }
    }, [favorites]);
    
    return (
        <nav>
            <div className="navbar-logo">
                <img src={pokeapi} alt="Pokeapi" />
            </div>
            <div className="navbar-menu">
                <ul>
                    <li>
                        <img className="heart" src={heart} />
                        <p className="favorites" onClick={handleClick}>Favoritos</p>
                        <p className="counter">{favorites.length}</p>
                    </li>
                    {show && <Favorites />}
                </ul>
            </div>
        </nav>
    )
}

export default Header;