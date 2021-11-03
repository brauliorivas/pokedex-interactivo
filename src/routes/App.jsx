import React from "react";
import AppPokemons from "@context/AppPokemons";
import useGetPokemons from "@hooks/useGetPokemons";
import Layout from "@containers/Layout";
import '@styles/global.css';

const APIpokemon = 'https://pokeapi.co/api/v2/pokemon/';
const APIhabitat = 'https://pokeapi.co/api/v2/pokemon-habitat/';
const APIgender = 'https://pokeapi.co/api/v2/gender/';

const App = () => {
    const Pokedex = useGetPokemons(APIpokemon, APIhabitat, APIgender);
    return (
        <AppPokemons.Provider value={Pokedex}>
            <Layout />
        </AppPokemons.Provider>
    );
}

export default App;