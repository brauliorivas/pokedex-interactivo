import React from 'react';
import AppFavorites from '@context/AppFavorites';
import '@styles/FavItem.scss';
import icon from '@assets/remove.png';

const FavItem = ({pokemon}) => {
    const [favorites, setFavorites] = React.useContext(AppFavorites);

    const remove = () => {
        setFavorites(favorites.filter(item => item.id != pokemon.id));
    }

    return (
        <div className="favorite-pokemon">
            <img className="pokemon-img-fav" src={pokemon.sprites}/>
            <div className="favorite-pokemon_name">
                {pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1, pokemon.name.length)}
            </div>
            <div className="remove-favorite">
                <img className="remove-icon" src={icon} onClick={remove} />
            </div>
        </div>
    );
}

export default FavItem;