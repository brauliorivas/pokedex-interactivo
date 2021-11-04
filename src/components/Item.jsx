import React, { useContext } from 'react';
import '@styles/Item.scss';
import favorite from '@assets/favorite.png';
import AppFavorites from '@context/AppFavorites';

const Item = ({ pokemon }) => {
    const [favorites, setFavorites] = useContext(AppFavorites);

    const addFavorites = () => {
        if (favorites.some(poke => poke.id == pokemon.id)) {
            setFavorites([...favorites])
        } else {
            setFavorites([...favorites, pokemon]);
        }
    }

    return (
        <div className="item">
            <div className="pokemon-img">
                <img src={pokemon.sprites}></img>
            </div>
            <div className="item-menu">
                <div className="item-menu-info">
                    <div className="item-name">
                        {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1, pokemon.name.length)}`}
                    </div>
                    <div className="item-id">
                        #{pokemon.id}
                    </div>
                </div>
                <div className="item-actions">
                    <div className="item-characteristics">
                        <div className="item-characteristics-el habitat">
                            {`${pokemon.category[0].toUpperCase()}${pokemon.category.slice(1, pokemon.category.length)}`}
                        </div>
                        <div className="item-characteristics-el gender">
                            {`${pokemon.ability[0].toUpperCase()}${pokemon.ability.slice(1, pokemon.ability.length)}`}
                        </div>
                        <div className="favorite" onClick={addFavorites}>
                            <img src={favorite} className="favorite-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;