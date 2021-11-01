import React, { useContext } from 'react';
import Item from '@components/Item';
import AppPokemons from '@context/AppPokemons';

const List = () => {
    const { pokedex } = useContext(AppPokemons);

    return (
        <section className="main-container">
            <div className="main-head">
                <p>Pokedex</p>
                <div className="list-menu">
                    <div className="list-menu-previous">
                        ant
                    </div>
                    <p className="page">1 de 25</p>
                    <div className="list-menu-next">
                        sig
                    </div>
                </div>
            </div>
            <div className="pokemon-list">
                {pokedex.length == 898 ? pokedex.map(pokemon => <Item key={pokemon.id} pokemon={pokemon} />) : <div>Loading...</div>}
            </div>
        </section>
    );
}

export default List;