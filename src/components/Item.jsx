import React from 'react';
import '@styles/Item.scss';

const Item = ({pokemon}) => {
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
                        <div className="item-characteristics-el">
                            Habitat
                            {/* {pokemon.habitat}  */}
                            {/* {https://pokeapi.co/api/v2/pokemon-habitat/{id or name}/} */}
                        </div>
                        <div className="item-characteristics-el">
                            Genero
                            {/* {pokemon.gender} */}
                            {/* {https://pokeapi.co/api/v2/gender/{id or name}/} */}
                        </div>
                    </div>
                    <div className="favorite">
                        <p>F</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;