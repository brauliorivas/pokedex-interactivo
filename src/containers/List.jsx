import React, { useContext, useState, useEffect } from 'react';
import Item from '@components/Item';
import AppPokemons from '@context/AppPokemons';

const List = () => {
    const [pokedex] = useState(useContext(AppPokemons));
    const [page, setPage] = useState([1, 25]);

    const previousPage = () => {
        if (page[0] - 25 < 1 ) {
            setPage([1, 25]);
        } else {
            setPage([page[0] - 25, page[1] - 25]);
        }
    }

    const nextPage = () => {
        if (page[1] + 25 > 898) {
            setPage([pokedex.length - 25, pokedex.length]);
        } else {
            setPage([page[0] + 25, page[1] + 25]);
        }
    }

    return (
        <section className="main-container">
            <div className="main-head">
                <p>Pokedex</p>
                <div className="list-menu">
                    <div className="list-menu-previous">
                        <button type="button" onClick={() => previousPage()}>Previous</button>
                    </div>
                    <p className="page">{page[0]} - {page[1]}</p>
                    <div className="list-menu-next">
                        <button type="button" onClick={() => nextPage()}>Next</button>
                    </div>
                </div>
            </div>
            <div className="pokemon-list">
                {pokedex.length == 898 ? pokedex.filter(pokemon => pokemon.id <= page[1] && pokemon.id >= page[0]).sort((a, b) => a.id - b.id).map(pokemon => <Item key={pokemon.id} pokemon={pokemon} />) : <div>Loading...</div>}
            </div>
        </section>
    );
}

export default List;