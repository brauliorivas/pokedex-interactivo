import React, { useContext } from 'react';
import Item from '@components/Item';
import AppPokemons from '@context/AppPokemons';

const POKEDEX = [];

const List = () => {
    const { pokemons } = useContext(AppPokemons);

    POKEDEX.push(...pokemons);

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
                {/* {pokemons[0] == undefined ? <div>Loading</div> :  <Item key={pokemons[0].id} pokemon={pokemons[0]} />} */}
                {POKEDEX.length == 898 ? POKEDEX.map(pokemon => <Item key={pokemon.id} pokemon={pokemon} />) : <div>Loading...</div>}
            </div>
        </section>
    );
}

export default List;