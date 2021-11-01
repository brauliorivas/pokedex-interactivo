import React from "react";
import AppPokemons from "@context/AppPokemons";
import useGetPokemons from "@hooks/useGetPokemons";
import Layout from "@containers/Layout";
import List from '@containers/List';
import '@styles/global.css';

const APIpokemon = 'https://pokeapi.co/api/v2/pokemon/';
const APIhabitat = 'https://pokeapi.co/api/v2/pokemon-habitat/';
const APIgender = 'https://pokeapi.co/api/v2/gender/';

const App = () => {
    const Pokedex = useGetPokemons(APIpokemon);
    return (
        <AppPokemons.Provider value={Pokedex}>
            <Layout>
                <List/>
            </Layout>
        </AppPokemons.Provider>
    );
}

export default App;