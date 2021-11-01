import React from 'react';

const Item = ({pokemon}) => {
    return (
        <div className="item">
            <div className="pokemon-img">
                {/* <img src={pokemon.image.src}></img>  */}
                {/* //https://pokeapi.co/api/v2/pokemon/{id}/ */} 
            </div>
            <div className="item-menu">
                <div className="item-menu-info">
                    <div className="item-name">
                        {pokemon.name} 
                    </div>
                    <div className="item-id">
                        {pokemon.id} 
                    </div>
                </div>
                <div className="item-actions">
                    <div className="item-characteristics">
                        <div className="item-characteristics-habitat">
                            {/* {pokemon.habitat}  */}
                            {/* {https://pokeapi.co/api/v2/pokemon-habitat/{id or name}/} */}
                        </div>
                        <div className="item-characteristics-gender">
                            {/* {pokemon.gender} */}
                            {/* {https://pokeapi.co/api/v2/gender/{id or name}/} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;