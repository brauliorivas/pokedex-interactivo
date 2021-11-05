import React, { useContext, useState, useEffect } from 'react';
import Item from '@components/Item';
import AppPokemons from '@context/AppPokemons';
import AppSearch from "@context/AppSearch";
import PokemonNotFound from '@components/PokemonNotFound';
import '@styles/List.scss';
import Button from '@components/Button';

const List = () => {
    const MAX = 24;
    const [pokedex] = useState(useContext(AppPokemons));
    const [page, setPage] = useState([1, MAX]);
    const [search, setSearch] = useContext(AppSearch);
    const [notFound, setnotFound] = useState(false);
    const found = pokedex.some(pokemon => pokemon.name.toLowerCase().slice(0, search.length) === search.toLowerCase());

    const previousPage = () => {
        if (page[0] - MAX < 1) {
            setPage([1, MAX]);
        } else {
            setPage([page[0] - MAX, page[1] - MAX]);
        }
    }

    const nextPage = () => {
        if (page[1] + MAX > 898) {
            setPage([pokedex.length - MAX, pokedex.length]);
        } else {
            setPage([page[0] + MAX, page[1] + MAX]);
        }
    }

    const handleSearch = () => {
        if (search === "") {
            return false;
        } else if (found) {
            const results = pokedex.filter(pokemon => pokemon.name.slice(0, search.length).toLowerCase() === search.toLowerCase());
            return results;
        } else {
            return false;
        }
    }

    const handleNotFound = () => {
        if (search === "") {
            notFound = false;
        } else if (found) {
            notFound = false;
        } else {
            notFound = true;
        }
    }

    return (
        <section className="main-container">
            {handleNotFound()}
            <div className="main-head">
                <p>Pokedex</p>
                <div className="list-menu">
                    <div className="list-menu-previous" onClick={previousPage}>
                        <Button value={'Anterior'}/>
                    </div>
                    <p className="page">{page[0]} - {page[1]}</p>
                    <div className="list-menu-next" onClick={nextPage}>
                        <Button value={'Siguiente'} />    
                    </div>
                </div>
            </div>
            <div className="search-result">
                {notFound && <PokemonNotFound />}
            </div>
            <div className="pokemon-list">
                {handleSearch() == false ? (pokedex.length == 898 ? pokedex.filter(pokemon => pokemon.id <= page[1] && pokemon.id >= page[0]).sort((a, b) => a.id - b.id).map(pokemon => <Item key={pokemon.id} pokemon={pokemon} />) : <div>Loading...</div>) : handleSearch().map(pokemon => <Item key={pokemon.id} pokemon={pokemon} />)}
            </div>
        </section>
    );
}

export default List;