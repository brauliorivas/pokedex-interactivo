import React, { useContext, useEffect } from 'react';
import Item from '@components/Item';
import AppPokemons from '@context/AppPokemons';

const List = () => {
    const [pokemons, loading] = useContext(AppPokemons);
    console.log(loading)
    console.log(pokemons)
    if (loading) {
        return <div>Loading...</div>
    } else {
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
                {pokemons.map(pokemon => (
                    <Item pokemon={pokemon} key={pokemon.id}/>
                ))}
            </div>
        </section>
    )};
}

export default List;