import React, { useContext } from 'react';
import AppFavorites from '@context/AppFavorites';
import FavItem from '@components/FavItem';
import '@styles/Favorites.scss';
import cross from '@assets/cross.png';
import AppShowFavorites from '@context/AppShowFavorites';

const Favorites = () => {
    const [favorites, setFavorites] = useContext(AppFavorites);
    const [showFavorites, setShowFavorites] = React.useContext(AppShowFavorites);

    const close = () => {
        setShowFavorites(!showFavorites);
    }

    return (
        <div className="pok-favorites">
            <div className="close-menu" onClick={close}>
                <img className="close-menu-img" src={cross} />
                <p className="close-menu-title">Cerrar</p>
            </div>
            <h2 className="pok-favorites-title">Favoritos</h2>
            {favorites.map(pokemon => (<FavItem key={pokemon.id} pokemon={pokemon} />))}
        </div>
    );
}

export default Favorites;